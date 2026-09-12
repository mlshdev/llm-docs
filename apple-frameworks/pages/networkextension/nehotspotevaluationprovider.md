> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotevaluationprovider](https://developer.apple.com/documentation/networkextension/nehotspotevaluationprovider)

# NEHotspotEvaluationProvider

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A protocol that defines methods and properties your extension implements to handle evaluate and filter scan list commands.

## Declaration

```swift
protocol NEHotspotEvaluationProvider : AppExtension
```

<a id="overview"></a>

## Overview

Conform to this protocol in your hotspot helper app extension.

## Topics

### Managing provider life cycle

- [start()](nehotspotevaluationprovider/start%28%29.md): Tells the extension to start the evaluation provider, in response to a request from the framework.
- [stop(reason:)](nehotspotevaluationprovider/stop%28reason_%29.md): Tells the exension to stop the evaluation provider, in response to a request from the framework.
- [NEProviderStopReason](neproviderstopreason.md): Reasons why the provider extension was stopped.

### Sending commands to the provider

- [handleCommand(\_:)](nehotspotevaluationprovider/handlecommand%28__%29.md): Handles a given hotspot command, in response to a request from the framework.
- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.

### Providing a network name

- [localizedDisplayName](nehotspotevaluationprovider/localizeddisplayname.md): A localized string that the system UI uses for annotation of the Wi-Fi network.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Hotspot helper extension

- [NEHotspotManager](nehotspotmanager.md): A class that you use to enable or disable the hotspot evaluation and authentication provider extensions.
- [NEHotspotAuthenticationProvider](nehotspotauthenticationprovider.md): A protocol that defines methods that your extension adopts to start and stop the extension, and to handle commands to authenticate with the hotspot network.
- [NEHotspotEvaluationProviderConfiguration](nehotspotevaluationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension evaluation providers.
- [NEHotspotAuthenticationProviderConfiguration](nehotspotauthenticationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension authentication providers.
