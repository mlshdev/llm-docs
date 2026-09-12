> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/dns-proxy-provider](https://developer.apple.com/documentation/networkextension/dns-proxy-provider)

# DNS proxy provider

**Interface languages:** Swift, Objective-C

**Framework:** Network Extension  
**Kind:** API Collection

Create an on-device DNS proxy using a custom protocol.

<a id="overview"></a>

## Overview

A DNS proxy provider is an app extension that implements DNS proxying. You should create a DNS proxy provider if you want to take responsibility for resolving all DNS queries on the system. Typically this involves forwarding the queries in a way that improves performance, reliability or security. For example, a DNS proxy provider might:

- Forward DNS queries to a well-known Internet-wide DNS server
- Talk to a DNS proxying service using DNS over HTTPS (DoH) or DNS over TLS (DoT)
- Implement a completely custom DNS proxying protocol

For detailed information about DNS proxy provider deployment options, see [TN3134: Network Extension provider deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment).

## Topics

### Essentials

- [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md): The APIs an app can use to customize networking features.

### Provider

- [NEDNSProxyProvider](nednsproxyprovider.md): The principal class for a DNS proxy provider app extension.
- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.

### Handling flows

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.

### Configuration

- [NEDNSProxyManager](nednsproxymanager.md): An object to create and manage an DNS proxy provider’s configuration.
- [NEDNSProxyProviderProtocol](nednsproxyproviderprotocol.md): Configuration parameters for a DNS proxy.

## See Also

### DNS configurations

- [DNS settings](dns-settings.md): Create and manage a system-wide DNS configuration that uses built-in encrypted DNS protocols.
