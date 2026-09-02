> Commit-pinned source for Docker main: [content/manuals/enterprise/security/hardened-desktop/_index.md](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/content/manuals/enterprise/security/hardened-desktop/_index.md)

# Hardened Docker Desktop

**Hardened Docker Desktop requirements**

- Subscription: Business
- For: Administrators

Hardened Docker Desktop provides a collection of security features designed to strengthen developer environments without compromising productivity or developer experience.

With Hardened Docker Desktop, you can enforce strict security policies that prevent developers and containers from bypassing organizational controls. You can also enhance container isolation to protect against security threats like malicious payloads that might breach the Docker Desktop Linux VM or underlying host system.

## Who should use Hardened Docker Desktop?

Hardened Docker Desktop is ideal for security-focused organizations that:

- Don't provide root or administrator access to developers' machines
- Want centralized control over Docker Desktop configurations
- Must meet specific compliance requirements

## How Hardened Docker Desktop works

Hardened Docker Desktop features work independently and together to create a defense-in-depth security strategy. They protect developer workstations against attacks across multiple layers, including Docker Desktop configuration, container image management, and container runtime security:

- Registry Access Management and Image Access Management prevent access to unauthorized container registries and image types, reducing exposure to malicious payloads
- Enhanced Container Isolation runs containers without root privileges inside a Linux user namespace, limiting the impact of malicious containers
- Air-gapped containers let you configure network restrictions for containers, preventing malicious containers from accessing your organization's internal network resources
- Namespace access controls whether organization members can push content to their personal Docker Hub namespaces, preventing accidental publication of images outside approved locations
- Settings Management locks down Docker Desktop configurations to enforce company policies and prevent developers from introducing insecure settings, whether intentionally or accidentally

## Next steps

Explore Hardened Docker Desktop features to understand how they can strengthen your organization's security posture:

- [Settings Management](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/): Learn how Settings Management can secure your developers' workflows.
- [Enhanced Container Isolation](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/): Understand how Enhanced Container Isolation can prevent container attacks.
- [Registry Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/registry-access-management/): Control the registries developers can access while using Docker Desktop.
- [Image Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/image-access-management/): Control the images developers can pull from Docker Hub.
- [Air-Gapped Containers](https://docs.docker.com/enterprise/security/hardened-desktop/air-gapped-containers/): Restrict containers from accessing unwanted network resources.
- [Namespace access](https://docs.docker.com/enterprise/security/hardened-desktop/namespace-access/): Control whether organization members can push content to their personal namespaces.
