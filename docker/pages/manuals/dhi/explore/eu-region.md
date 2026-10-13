> Pinned source for Docker main: [content/manuals/dhi/explore/eu-region.md](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/content/manuals/dhi/explore/eu-region.md)

# EU data residency for Docker Hardened Images

**Docker Hardened Images EU data residency requirements**

- Availability: Early Access
- Subscription: Docker Hardened Images Select or Enterprise

Docker can provision your organization's Docker Hardened Images (DHI)
subscription in the EU region. When your subscription is in the EU region,
Docker stores your mirrored and customized images in the EU.

## How your region is set

Docker sets the region on your DHI subscription. Docker doesn't detect your
region automatically. To have your subscription provisioned in the EU region,
or to change its region, contact your Docker account representative or <a id="dkr_docs_cs_dhi_eu_region"></a>Docker
sales.

If you plan to use the EU region, request it before you start mirroring.
Mirrors that you create before your subscription moves to the EU region stay
in their original region.

## Check your region

1. Sign in to [Docker Hub](https://hub.docker.com).
2. Select **My Hub**.
3. In the namespace drop-down, select your organization.
4. Select **Hardened Images** > **Manage**.

When your subscription is in the EU region, the subscription label shows
**Your subscription (Region EU)**. When it shows only **Your subscription**,
your subscription is in the default US region.

## What Docker stores in the EU

When your subscription is in the EU region, Docker stores the following in the
EU:

- The repositories that Docker creates when you [mirror a DHI
  repository](https://docs.docker.com/dhi/how-to/mirror/) to your organization on Docker Hub, and
  their attestations
- Your [customized images](https://docs.docker.com/dhi/how-to/customize/) and their attestations

OCI artifacts that you use in customizations are stored in the region of the
repository that you push them to. To keep them in the EU, push them to
repositories in the EU region.

Your region doesn't apply to repositories that you [mirror to a third-party
registry](https://docs.docker.com/dhi/how-to/mirror/#mirror-a-dhi-repository-to-a-third-party-registry).
Where that content is stored depends on the registry you use.

## Attestations in the EU region

Docker stores attestations with the images in your Docker Hub repository. For
mirrored repositories, Docker copies only the attestations created when the
image is built. Attestations that Docker Scout generates, such as VEX
statements and vulnerability reports, aren't available in the EU region. To
see which attestations are available, see [Image
attestations](https://docs.docker.com/dhi/explore/security-concepts/attestations/#image-attestations).

## Limitations in the EU region

Mirroring and customization in the EU region work the same as in other regions,
with the following differences:

- You can't [add files](https://docs.docker.com/dhi/how-to/customize/#inject-files-into-the-image)
  that you write directly in a customization, such as configuration files or
  setup scripts. This doesn't affect files that come from OCI artifacts. You can
  still add packages, OCI artifacts, and symlinks.
- Docker doesn't provide VEX statements or vulnerability reports for your
  mirrored repositories or customized images.
- Docker doesn't turn on Docker Scout image analysis for your mirrored
  repositories or customized images in the EU region. If you turn on Docker
  Scout image analysis for a repository in the EU region, the data that Docker
  Scout processes is stored in the US.
