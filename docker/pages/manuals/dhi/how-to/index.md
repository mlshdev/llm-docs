> Commit-pinned source for Docker main: [content/manuals/dhi/how-to/_index.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/manuals/dhi/how-to/_index.md)

# How-tos

This section provides practical, task-based guidance for working with Docker
Hardened Images (DHIs). Whether you're evaluating DHIs for the first time or
integrating them into a production CI/CD pipeline, these topics cover the key
tasks across the adoption journey: discover, adopt, verify, and govern.

The topics are organized around the typical lifecycle of working with DHIs, but
you can use them as needed based on your specific workflow.

Explore the topics below that match your current needs.

## Discover

Explore available images and metadata in the DHI catalog.

- [Search and evaluate Docker Hardened Images](https://docs.docker.com/dhi/how-to/search-evaluate/): Learn how to find and compare image repositories, variants, and metadata in the DHI catalog.

## Adopt

Mirror trusted images, customize as needed, and integrate into your workflows.

- [Get started with DHI Select and Enterprise](https://docs.docker.com/dhi/how-to/select-enterprise/): Learn how to mirror repositories, customize images, and access compliance variants with DHI Select and Enterprise subscriptions.
- [Mirror a Docker Hardened Image repository](https://docs.docker.com/dhi/how-to/mirror/): Learn how to mirror an image into your organization's namespace and optionally push it to another private registry.
- [Customize a Docker Hardened Image or chart](https://docs.docker.com/dhi/how-to/customize/): Learn how to customize Docker Hardened Images and charts.
- [Use hardened system packages](https://docs.docker.com/dhi/how-to/hardened-packages/): Learn how to use Docker's hardened system packages in your images.
- [Use a Docker Hardened Image](https://docs.docker.com/dhi/how-to/use/): Learn how to pull, run, and reference Docker Hardened Images in Dockerfiles, CI pipelines, and standard development workflows.
- [Use a Docker Hardened Image chart](https://docs.docker.com/dhi/how-to/helm/): Learn how to use a Docker Hardened Image chart.

## Verify

Check signatures, SBOMs, and provenance, and scan for vulnerabilities.

- [Verify a Docker Hardened Image or chart](https://docs.docker.com/dhi/how-to/verify/): Use Docker Scout or cosign to verify signed attestations like SBOMs, provenance, and vulnerability data for Docker Hardened Images and charts.
- [Scan Docker Hardened Images](https://docs.docker.com/dhi/how-to/scan/): Learn how to scan Docker Hardened Images for known vulnerabilities using Docker Scout, Grype, or Trivy.
- [Query VEX for a Docker Hardened Image](https://docs.docker.com/dhi/how-to/vex-api/): Use the DHI GraphQL API to fetch VEX statements and suppressed CVEs for a Docker Hardened Image by digest, at scale.

## Govern

Enforce policies to maintain security and compliance.

- [Apply Docker Hardened Image policies to your images](https://docs.docker.com/dhi/how-to/policies/): Learn how to hold your own images to Docker Hardened Image security and compliance standards using the Docker Scout CLI.

## Troubleshoot

- [Troubleshoot](https://docs.docker.com/dhi/how-to/troubleshoot/): Resolve common issues when building, running, or debugging Docker Hardened Images, such as non-root behavior, missing shells, and port access.
