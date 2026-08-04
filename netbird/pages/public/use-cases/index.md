> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/use-cases/index.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/use-cases/index.mdx)

# Use Cases

You know what you want to achieve; this page finds the guide that gets you there. Scan for your scenario and jump straight in. If you are new to NetBird, start with the [quickstart](https://docs.netbird.io/get-started) first.

## I want to...

### Connect to remote networks and devices

| I want to...                                            | Guide                                                                                                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Understand which remote access scenario I need          | [Remote Access overview](https://docs.netbird.io/use-cases/remote-access)                                                |
| Connect two networks (offices, homes, or clouds)        | [Site-to-Site with Networks](https://docs.netbird.io/use-cases/remote-access/site-to-site)                               |
| Let clientless devices reach my NetBird peers           | [Site-to-VPN](https://docs.netbird.io/use-cases/remote-access/site-to-vpn)                                               |
| Connect cloud workloads to on-premise services          | [Cloud to On-Premise](https://docs.netbird.io/use-cases/remote-access/cloud-to-on-premise)                               |
| Reach my NAS and home devices from anywhere             | [Access Home Devices](https://docs.netbird.io/use-cases/remote-access/access-home-devices)                               |
| Access services running on the routing peer itself      | [Reach Services on the Routing Peer](https://docs.netbird.io/use-cases/remote-access/reach-services-on-the-routing-peer) |
| Route all my internet traffic through one peer          | [Exit Nodes](https://docs.netbird.io/use-cases/remote-access/exit-nodes)                                                 |
| Reach Active Directory and Windows file shares remotely | [Active Directory & Windows File Shares](https://docs.netbird.io/use-cases/remote-access/active-directory)               |

### Deploy NetBird in the cloud

| I want to...                                   | Guide                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Deploy NetBird on AWS ECS with Terraform       | [NetBird on AWS ECS](https://docs.netbird.io/use-cases/cloud/aws-ecs-terraform)                  |
| Run NetBird on serverless platforms            | [NetBird on Serverless (FaaS)](https://docs.netbird.io/use-cases/cloud/netbird-on-faas)          |
| Build AI infrastructure across multiple clouds | [Distributed Multi-Cloud AI](https://docs.netbird.io/use-cases/cloud/distributed-multi-cloud-ai) |

### Run NetBird in Kubernetes

| I want to...                                     | Guide                                                                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Get started with the NetBird Kubernetes operator | [Getting Started](https://docs.netbird.io/use-cases/kubernetes)                                                |
| Let my peers reach services in a cluster         | [Routing Peer](https://docs.netbird.io/use-cases/kubernetes/routing-peer)                                      |
| Give a pod its own peer identity                 | [Client Sidecar](https://docs.netbird.io/use-cases/kubernetes/client-sidecar)                                  |
| Operate a remote cluster with `kubectl`          | [API Server Proxy](https://docs.netbird.io/use-cases/kubernetes/api-server-proxy)                              |
| Expose services through Gateway API CRDs         | [Gateway API](https://docs.netbird.io/use-cases/kubernetes/gateway-api)                                        |
| Expose a single Kubernetes service end to end    | [Route to a Kubernetes Service](https://docs.netbird.io/use-cases/kubernetes/route-to-a-kubernetes-service)    |
| Deploy routing peers to a cluster                | [Deploy Routing Peers to a Cluster](https://docs.netbird.io/use-cases/kubernetes/routing-peers-and-kubernetes) |

### Secure my network

| I want to...                                            | Guide                                                                                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Implement Zero Trust networking step by step            | [Implement Zero Trust](https://docs.netbird.io/use-cases/security/implement-zero-trust)              |
| Publish internal services without opening inbound ports | [Private Proxy Without Inbound Ports](https://docs.netbird.io/use-cases/security/private-no-inbound) |

### Run NetBird at home

Homelabbers get a dedicated starting point covering NAS access, home automation, media servers, and connecting family networks: see the [Homelab guide](https://docs.netbird.io/use-cases/homelab). To run NetBird directly on your router, see the [MikroTik](https://docs.netbird.io/get-started/install/mikrotik), [OpenWrt](https://docs.netbird.io/get-started/install/openwrt), [pfSense](https://docs.netbird.io/get-started/install/pfsense), and [OPNsense](https://docs.netbird.io/get-started/install/opnsense) install guides.

## Looking for feature documentation?

These guides show how to accomplish a scenario end to end. For how each feature works and its configuration options, see [Manage NetBird](https://docs.netbird.io/manage/networks) — for example [Networks](https://docs.netbird.io/manage/networks), [Access Control](https://docs.netbird.io/manage/access-control), and the [Reverse Proxy](https://docs.netbird.io/manage/reverse-proxy).
