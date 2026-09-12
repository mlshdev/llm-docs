> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/content-filter-providers](https://developer.apple.com/documentation/networkextension/content-filter-providers)

# Content filter providers (Swift)

**Framework:** Network Extension  
**Kind:** API Collection

Create an on-device network content filter.

<a id="overview"></a>

## Overview

An on-device network content filter examines user network content as it passes through the network stack and determines if it should block that content or allow it to pass on to its final destination. You might create a content filter and sell it to organizations, like schools and businesses, that want to prevent users from accessing specific Internet content.

A content filter consists of two providers that work in close cooperation:

- A filter data provider receives user network content and examines that content to determine whether to block or allow it.
- A filter control provider passes configuration information to the filter data provider to allow that provider to do its job.

This separation exists to guarantee user privacy. The filter data provider runs in a very restrictive sandbox that prevents user network content from escaping that provider. The filter control provider has a less restrictive sandbox but doesn’t have access to user network content. By combining these providers, your content filter has access to the network but can’t use that access to export user network content.

For example, your filter control provider might download a set of filtering rules and save them to a shared app group. Your filter data provider has *read-only* access to that app group, allowing it use those rules to filter content but still preventing it from exporting user network content.

For detailed information about content filter provider deployment options, see [TN3134: Network Extension provider deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment).

> **Note**

>  When a VPN configuration is active, connections use the VPN instead of iCloud Private Relay. Network Extension providers also don’t use iCloud Private Relay.

## Topics

### Essentials

- [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md): The APIs an app can use to customize networking features.

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

### Filter configuration

- [NEFilterManager](nefiltermanager.md): An object to create and manage a content filter’s configuration.
- [NEFilterProviderConfiguration](nefilterproviderconfiguration.md): Configuration parameters for a content filter.

## See Also

### Content filters

- [Filtering Network Traffic](filtering-network-traffic.md): Use the Network Extension framework to allow or deny network connections.

# Content filter providers (Objective-C)

**Framework:** Network Extension  
**Kind:** API Collection

Create an on-device network content filter.

<a id="overview"></a>

## Overview

An on-device network content filter examines user network content as it passes through the network stack and determines if it should block that content or allow it to pass on to its final destination. You might create a content filter and sell it to organizations, like schools and businesses, that want to prevent users from accessing specific Internet content.

A content filter consists of two providers that work in close cooperation:

- A filter data provider receives user network content and examines that content to determine whether to block or allow it.
- A filter control provider passes configuration information to the filter data provider to allow that provider to do its job.

This separation exists to guarantee user privacy. The filter data provider runs in a very restrictive sandbox that prevents user network content from escaping that provider. The filter control provider has a less restrictive sandbox but doesn’t have access to user network content. By combining these providers, your content filter has access to the network but can’t use that access to export user network content.

For example, your filter control provider might download a set of filtering rules and save them to a shared app group. Your filter data provider has *read-only* access to that app group, allowing it use those rules to filter content but still preventing it from exporting user network content.

For detailed information about content filter provider deployment options, see [TN3134: Network Extension provider deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment).

> **Note**

>  When a VPN configuration is active, connections use the VPN instead of iCloud Private Relay. Network Extension providers also don’t use iCloud Private Relay.

## Topics

### Essentials

- [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md): The APIs an app can use to customize networking features.

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.

### Flow handling

- [NEFilterFlow](nefilterflow.md): The abstract base class for types that represent flows of network data.
- [NEFilterBrowserFlow](nefilterbrowserflow.md): A flow of network data, originating from a WebKit-based browser, that the filter examines.
- [NEFilterSocketFlow](nefiltersocketflow.md): A flow of network data that the filter examines.
- [NEFilterNewFlowVerdict](nefilternewflowverdict.md): The result from a filter data provder after the initial examination of a flow.
- [NEFilterDataVerdict](nefilterdataverdict.md): The result from a filter data provder for subsequent chunks of data on a flow.
- [NEFilterControlVerdict](nefiltercontrolverdict.md): The result from a filter control provider.
- [NEFilterRemediationVerdict](nefilterremediationverdict.md): The result from a filter data provider after the user requests remediation for a blocked flow.
- [NEFilterVerdict](nefilterverdict.md): The abstract base class for filter verdict classes.
- [NEFilterReport](nefilterreport.md): The report of the data provider’s action on a flow.

### Filter configuration

- [NEFilterManager](nefiltermanager.md): An object to create and manage a content filter’s configuration.
- [NEFilterProviderConfiguration](nefilterproviderconfiguration.md): Configuration parameters for a content filter.
