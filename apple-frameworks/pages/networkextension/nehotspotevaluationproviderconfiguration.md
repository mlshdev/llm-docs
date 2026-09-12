> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotevaluationproviderconfiguration](https://developer.apple.com/documentation/networkextension/nehotspotevaluationproviderconfiguration)

# NEHotspotEvaluationProviderConfiguration

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A class that defines configuration options for use in NetworkExtension evaluation providers.

## Declaration

```swift
@MainActor @preconcurrency class NEHotspotEvaluationProviderConfiguration
```

## Relationships

### Inherits From

- [NEAppExtensionConfiguration](neappextensionconfiguration.md)

### Conforms To

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hotspot helper extension

- [NEHotspotManager](nehotspotmanager.md): A class that you use to enable or disable the hotspot evaluation and authentication provider extensions.
- [NEHotspotEvaluationProvider](nehotspotevaluationprovider.md): A protocol that defines methods and properties your extension implements to handle evaluate and filter scan list commands.
- [NEHotspotAuthenticationProvider](nehotspotauthenticationprovider.md): A protocol that defines methods that your extension adopts to start and stop the extension, and to handle commands to authenticate with the hotspot network.
- [NEHotspotAuthenticationProviderConfiguration](nehotspotauthenticationproviderconfiguration.md): A class that defines configuration options for use in NetworkExtension authentication providers.
