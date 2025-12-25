import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b fd-border">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 via-transparent to-fd-primary/10" />
        <div className="container relative mx-auto px-6 py-24 text-center md:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border fd-border bg-fd-card px-4 py-1.5 text-sm fd-muted">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Quantum-Ready Multi-Signature
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight fd-foreground md:text-6xl">
              Lux Safe
            </h1>
            <p className="mb-8 text-lg fd-muted md:text-xl">
              Enterprise-grade multi-signature wallets with FROST threshold signatures.
              Secure your assets with quantum-resistant cryptography and flexible
              recovery options on the Lux blockchain.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-fd-primary px-8 font-medium text-white transition-colors hover:bg-fd-primary/90"
              >
                Get Started
              </Link>
              <Link
                href="/docs/architecture"
                className="inline-flex h-12 items-center justify-center rounded-lg border fd-border bg-fd-card px-8 font-medium fd-foreground transition-colors hover:bg-fd-muted/10"
              >
                View Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold fd-foreground">
            Security Features
          </h2>
          <p className="mx-auto max-w-2xl fd-muted">
            Built with the latest cryptographic standards and designed for
            institutional-grade asset protection.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Multi-Sig */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">Multi-Sig</h3>
            <p className="fd-muted">
              Flexible M-of-N signature schemes. Require multiple approvals for
              transactions with customizable thresholds and owner management.
            </p>
          </div>

          {/* FROST Signatures */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">FROST Signatures</h3>
            <p className="fd-muted">
              Schnorr threshold signatures using the FROST protocol. Distributed
              key generation with no trusted dealer required.
            </p>
          </div>

          {/* Recovery */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">Recovery</h3>
            <p className="fd-muted">
              Social recovery and guardian-based account recovery. Never lose
              access to your assets with time-locked recovery mechanisms.
            </p>
          </div>

          {/* Modules */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">Modules</h3>
            <p className="fd-muted">
              Extensible module system for custom functionality. Add spending
              limits, allowlists, automation, and more without redeploying.
            </p>
          </div>

          {/* Gasless */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">Gasless</h3>
            <p className="fd-muted">
              Meta-transactions and ERC-4337 account abstraction support.
              Sponsor gas for users or pay fees in any token.
            </p>
          </div>

          {/* Quantum-Safe */}
          <div className="group rounded-xl border fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10">
              <svg className="h-6 w-6 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold fd-foreground">Quantum-Safe</h3>
            <p className="fd-muted">
              Optional Ringtail post-quantum signatures. Protect against future
              quantum computer attacks with lattice-based cryptography.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t fd-border bg-fd-card/50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold fd-foreground">
            Ready to secure your assets?
          </h2>
          <p className="mb-8 fd-muted">
            Deploy your first Lux Safe in minutes with our comprehensive documentation.
          </p>
          <Link
            href="/docs/quickstart"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-fd-primary px-8 font-medium text-white transition-colors hover:bg-fd-primary/90"
          >
            Read the Docs
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t fd-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold fd-foreground">Lux Safe</span>
              <span className="fd-muted">|</span>
              <span className="text-sm fd-muted">Secure Multi-Signature Wallets</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-sm fd-muted hover:fd-foreground transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com/luxfi/safe" className="text-sm fd-muted hover:fd-foreground transition-colors">
                GitHub
              </Link>
              <Link href="https://lux.network" className="text-sm fd-muted hover:fd-foreground transition-colors">
                Lux Network
              </Link>
            </div>
            <p className="text-sm fd-muted">
              Built by Lux Industries
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
