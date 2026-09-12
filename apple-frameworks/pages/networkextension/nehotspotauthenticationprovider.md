> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotauthenticationprovider](https://developer.apple.com/documentation/networkextension/nehotspotauthenticationprovider)

# NEHotspotAuthenticationProvider

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A protocol that defines methods that your extension adopts to start and stop the extension, and to handle commands to authenticate with the hotspot network.

## Declaration

```swift
protocol NEHotspotAuthenticationProvider : AppExtension
```

<a id="overview"></a>

## Overview

Conform to this protocol in your hotspot helper app extension to handle the hotspot commands [NEHotspotHelperCommandType.authenticate](nehotspothelpercommandtype/authenticate.md), [NEHotspotHelperCommandType.maintain](nehotspothelpercommandtype/maintain.md), [NEHotspotHelperCommandType.presentUI](nehotspothelpercommandtype/presentui.md), and [NEHotspotHelperCommandType.logoff](nehotspothelpercommandtype/logoff.md).

## Topics

### Managing provider life cycle

- [start()](nehotspotauthenticationprovider/start%28%29.md): Tells the extension to start the authentication provider, in response to a request from the framework.
- [stop(reason:)](nehotspotauthenticationprovider/stop%28reason_%29.md): Tells the exension to stop the authentication provider, in response to a request from the framework.
- [NEProviderStopReason](neproviderstopreason.md): Reasons why the provider extension was stopped.

### Sending commands to the provider

- [handleCommand(\_:)](nehotspotauthenticationprovider/handlecommand%28__%29.md): Handles a given hotspot command, in response to a request from the framework.
- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Hotspot helper extension

- [NEHotspotManager](nehotspotmanager.md): A class that you use to enable or disable the hotspot evaluation and authentication provider extensions.
- [NEHotspotEvaluationProvider](nehotspotevaluationprovider.md): A protocol that defines methods and properties your extension implements to handle evaluate and filter scan list commands.
- [NEHotspotEvaluationProviderConfiguration](nehotspotevaluationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension evaluation providers.
- [NEHotspotAuthenticationProviderConfiguration](nehotspotauthenticationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension authentication providers.
