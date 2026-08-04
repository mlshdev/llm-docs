> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/use-cases/cloud/index.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/use-cases/cloud/index.mdx)

# Cloud Use Cases

Deploy NetBird across cloud environments to securely connect workloads, enable hybrid cloud connectivity, and simplify multi-cloud networking.

## Common Scenarios

- **Hybrid Cloud**: Connect cloud workloads to on-premise databases and services
- **Multi-Cloud**: Bridge AWS, GCP, and Azure environments without exposing traffic to the internet
- **Serverless**: Run NetBird on FaaS platforms for ephemeral, secure connectivity
- **Container Orchestration**: Deploy NetBird as a daemon set on ECS, EKS, or other container platforms

## Getting Started

For connecting cloud VPCs to on-premise networks, see the [Remote Access overview](https://docs.netbird.io/use-cases/remote-access). For running NetBird inside Kubernetes, see the [Kubernetes guides](https://docs.netbird.io/use-cases/kubernetes).

### Guides

- **Items:** \[NetBird on AWS ECS]\(/use-cases/cloud/aws-ecs-terraform) - Deploy NetBird as an ECS daemon set using Terraform; \[NetBird on Serverless (FaaS)]\(/use-cases/cloud/netbird-on-faas) - Run NetBird on serverless platforms for ephemeral connectivity; \[Distributed Multi-Cloud AI]\(/use-cases/cloud/distributed-multi-cloud-ai) - Build distributed AI infrastructure across multiple clouds with ArgoCD and MicroK8s; \[Cloud to On-Premise Access]\(/use-cases/remote-access/cloud-to-on-premise) - Connect cloud workloads to on-premise databases and services; \[Multi-Cloud Site-to-Site]\(/use-cases/remote-access/site-to-site) - Bridge cloud VPCs across providers using Site-to-Site routing

## Cloud Provider Considerations

### AWS

- Use VPC endpoints where possible for AWS services
- Security groups must allow traffic from NetBird routing peers
- Consider Auto Scaling groups with static ENIs for high availability

### GCP

- Enable IP forwarding on routing peer instances
- Firewall rules must allow traffic from routing peer internal IPs
- Use instance groups for redundancy

### Azure

- Enable IP forwarding on routing peer NICs
- Network security groups must allow routing peer traffic
- Consider Virtual Machine Scale Sets for HA
