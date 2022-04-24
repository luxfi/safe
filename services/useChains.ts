import { ChainInfo, getChainsConfig, type ChainListResponse } from '@gnosis.pm/safe-react-gateway-sdk'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectChainById, selectChains, setChains } from '@/store/chainsSlice'
import { Errors, logError } from './exceptions'
import useAsync from './useAsync'
import useSafeAddress from './useSafeAddress'

export const useInitChains = (): void => {
  const dispatch = useAppDispatch()

  const [data, error, loading] = useAsync<ChainListResponse>(getChainsConfig, [])

  useEffect(() => {
    dispatch(
      setChains({
        configs: data?.results || [],
        error,
        loading,
      }),
    )
  }, [data, error, loading, dispatch])

  useEffect(() => {
    if (error) {
      logError(Errors._904, error.message)
    }
  }, [error])
}

const useChains = () => {
  return useAppSelector(selectChains)
}

export default useChains

export const useCurrentChain = (): ChainInfo | undefined => {
  const { chainId } = useSafeAddress()
  const chainConfig = useAppSelector((state) => selectChainById(state, chainId))
  return chainConfig
}