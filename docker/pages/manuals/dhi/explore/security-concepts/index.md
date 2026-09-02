> Commit-pinned source for Docker main: [content/manuals/dhi/explore/security-concepts/_index.md](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/content/manuals/dhi/explore/security-concepts/_index.md)

# Security concepts

Docker Hardened Images (DHIs) are built on a foundation of secure software
supply chain practices. This section explains the core concepts behind that
foundation, from signed attestations and immutable digests to standards like SLSA
and VEX.

Start here if you want to understand how Docker Hardened Images support compliance,
transparency, and security.

## Security metadata and attestations

- [Attestations](https://docs.docker.com/dhi/explore/security-concepts/attestations/): Review the full set of signed attestations included with each Docker Hardened Image, such as SBOMs, VEX, build provenance, and scan results.
- [Software Bill of Materials (SBOMs)](https://docs.docker.com/dhi/explore/security-concepts/sbom/): Learn what SBOMs are, why they matter, and how Docker Hardened Images include signed SBOMs to support transparency and compliance.
- [Supply-chain Levels for Software Artifacts (SLSA)](https://docs.docker.com/dhi/explore/security-concepts/slsa/): Learn how Docker Hardened Images comply with SLSA Build Level 3 and how to verify provenance for secure, tamper-resistant builds.
- [Image provenance](https://docs.docker.com/dhi/explore/security-concepts/provenance/): Learn how build provenance metadata helps trace the origin of Docker Hardened Images and support compliance with SLSA.

## Compliance standards

- [FIPS](https://docs.docker.com/dhi/explore/security-concepts/fips/): Learn how Docker Hardened Images support FIPS 140 by using validated cryptographic modules and providing signed attestations for compliance audits.
- [STIG](https://docs.docker.com/dhi/explore/security-concepts/stig/): Learn how Docker Hardened Images provide STIG-ready container images with verifiable security scan attestations for government and enterprise compliance requirements.
- [CIS Benchmarks](https://docs.docker.com/dhi/explore/security-concepts/cis/): Learn how Docker Hardened Images help you meet Center for Internet Security (CIS) Docker Benchmark requirements for secure container configuration and deployment.

## Vulnerability and risk management

- [Common Vulnerabilities and Exposures (CVEs)](https://docs.docker.com/dhi/explore/security-concepts/cves/): Understand what CVEs are, how Docker Hardened Images reduce exposure, and how to scan images for vulnerabilities using popular tools.
- [Vulnerability Exploitability eXchange (VEX)](https://docs.docker.com/dhi/explore/security-concepts/vex/): Learn how VEX helps you prioritize real risks by identifying which vulnerabilities in Docker Hardened Images are actually exploitable.
- [Software Supply Chain Security](https://docs.docker.com/dhi/explore/security-concepts/sscs/): Learn how Docker Hardened Images help secure every stage of your software supply chain with signed metadata, provenance, and minimal attack surface.
- [Secure Software Development Lifecycle (SSDLC)](https://docs.docker.com/dhi/explore/security-concepts/ssdlc/): See how Docker Hardened Images support a secure SDLC by integrating with scanning, signing, and debugging tools.

## Image structure and behavior

- [Distroless images](https://docs.docker.com/dhi/explore/security-concepts/distroless/): Learn how Docker Hardened Images use distroless variants to minimize attack surface and remove unnecessary components.
- [glibc and musl support in Docker Hardened Images](https://docs.docker.com/dhi/explore/security-concepts/glibc-musl/): Compare glibc and musl variants of DHIs to choose the right base image for your application’s compatibility, size, and performance needs.
- [Image immutability](https://docs.docker.com/dhi/explore/security-concepts/immutability/): Understand how image digests, read-only containers, and signed metadata ensure Docker Hardened Images are tamper-resistant and immutable.
- [Image hardening](https://docs.docker.com/dhi/explore/security-concepts/hardening/): Learn how Docker Hardened Images are designed for security, with minimal components, nonroot execution, and secure-by-default configurations.

## Verification and traceability

- [Digests](https://docs.docker.com/dhi/explore/security-concepts/digests/): Learn how to use immutable image digests to guarantee consistency and verify the exact Docker Hardened Image you're running.
- [Code signing](https://docs.docker.com/dhi/explore/security-concepts/signatures/): Understand how Docker Hardened Images are cryptographically signed using Cosign to verify authenticity, integrity, and secure provenance.
