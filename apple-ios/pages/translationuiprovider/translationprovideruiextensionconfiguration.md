> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider/translationprovideruiextensionconfiguration](https://developer.apple.com/documentation/translationuiprovider/translationprovideruiextensionconfiguration)

# TranslationProviderUIExtensionConfiguration

**Framework:** TranslationUIProvider  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The type for a translation UI provider extension’s configuration object.

## Declaration

```swift
@MainActor @preconcurrency struct TranslationProviderUIExtensionConfiguration
```

## Topics

### Creating a configuration

- [init(\_:)](translationprovideruiextensionconfiguration/init%28__%29.md): Creates a default configuration for the given extension.

## Relationships

### Conforms To

- [AppExtensionConfiguration](https://developer.apple.com/documentation/extensionfoundation/appextensionconfiguration)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration and text selection

- [TranslationUIProviderSelectedTextScene](translationuiproviderselectedtextscene.md): The specific app extension scene that this extension provides.
