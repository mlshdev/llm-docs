> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/hotspot-helper](https://developer.apple.com/documentation/networkextension/hotspot-helper)

# Hotspot helper (Swift)

**Framework:** Network Extension  
**Kind:** API Collection

Integrate your app with the iOS hotspot network subsystem.

<a id="overview"></a>

## Overview

[NEHotspotHelper](nehotspothelper.md) allows your app to participate in the process of authenticating with hotspot networks, that is, Wi-Fi networks where the user must interact with the network to gain access to the wider Internet. Hotspot helpers are only supported on iOS.

> **Important**

>  [NEHotspotHelper](nehotspothelper.md) is *only* useful for hotspot integration. There are both technical and business restrictions that prevent it from being used for other tasks, such as accessory integration or Wi-Fi based location. Before using [NEHotspotHelper](nehotspothelper.md), you must first be granted a special entitlement (`com.apple.developer.networking.HotspotHelper`) by Apple. For more information, see [Hotspot Helper Request](https://developer.apple.com/contact/request/network-extension/).

For more about creating a hotspot helper, see the [Hotspot Network Subsystem Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/Hotspot_Network_Subsystem_Guide/Contents/Introduction.html#//apple_ref/doc/uid/TP40016639).

## Topics

### Registration

- [NEHotspotHelper](nehotspothelper.md): Deprecated. A class to register a hotspot helper.

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.

### Hotspot communication

Hotspot helpers can use these APIs to communicate with the hotspot even when Wi-Fi is not the default route.

- [bind(to:)](../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

### Hotspot helper extension

Implement hotspot evaluation and authentication in an app extension for better performance and security.

- [NEHotspotManager](nehotspotmanager.md): A class that you use to enable or disable the hotspot evaluation and authentication provider extensions.
- [NEHotspotEvaluationProvider](nehotspotevaluationprovider.md): A protocol that defines methods and properties your extension implements to handle evaluate and filter scan list commands.
- [NEHotspotAuthenticationProvider](nehotspotauthenticationprovider.md): A protocol that defines methods that your extension adopts to start and stop the extension, and to handle commands to authenticate with the hotspot network.
- [NEHotspotEvaluationProviderConfiguration](nehotspotevaluationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension evaluation providers.
- [NEHotspotAuthenticationProviderConfiguration](nehotspotauthenticationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension authentication providers.

## See Also

### Wi-Fi management

- [Wi-Fi configuration](wi-fi-configuration.md): Add persistent Wi-Fi configurations, or temporarily move the device to a specific Wi-Fi network.
- [Configuring a Wi-Fi accessory to join a network](configuring-a-wi-fi-accessory-to-join-a-network.md): Associate an iOS device with an accessory’s network to deliver network configuration information.

# Hotspot helper (Objective-C)

**Framework:** Network Extension  
**Kind:** API Collection

Integrate your app with the iOS hotspot network subsystem.

<a id="overview"></a>

## Overview

[NEHotspotHelper](nehotspothelper.md) allows your app to participate in the process of authenticating with hotspot networks, that is, Wi-Fi networks where the user must interact with the network to gain access to the wider Internet. Hotspot helpers are only supported on iOS.

> **Important**

>  [NEHotspotHelper](nehotspothelper.md) is *only* useful for hotspot integration. There are both technical and business restrictions that prevent it from being used for other tasks, such as accessory integration or Wi-Fi based location. Before using [NEHotspotHelper](nehotspothelper.md), you must first be granted a special entitlement (`com.apple.developer.networking.HotspotHelper`) by Apple. For more information, see [Hotspot Helper Request](https://developer.apple.com/contact/request/network-extension/).

For more about creating a hotspot helper, see the [Hotspot Network Subsystem Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/Hotspot_Network_Subsystem_Guide/Contents/Introduction.html#//apple_ref/doc/uid/TP40016639).

## Topics

### Registration

- [NEHotspotHelper](nehotspothelper.md): Deprecated. A class to register a hotspot helper.

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.

### Hotspot communication

Hotspot helpers can use these APIs to communicate with the hotspot even when Wi-Fi is not the default route.

- [bindToHotspotHelperCommand:](../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

## See Also

### Wi-Fi management

- [Wi-Fi configuration](wi-fi-configuration.md): Add persistent Wi-Fi configurations, or temporarily move the device to a specific Wi-Fi network.
- [Configuring a Wi-Fi accessory to join a network](configuring-a-wi-fi-accessory-to-join-a-network.md): Associate an iOS device with an accessory’s network to deliver network configuration information.
