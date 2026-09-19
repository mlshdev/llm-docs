> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translationuiprovider/translationuiproviderselectedtextscene

# TranslationUIProviderSelectedTextScene

**Framework:** TranslationUIProvider  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The specific app extension scene that this extension provides.

## Declaration

```swift
@MainActor @preconcurrency struct TranslationUIProviderSelectedTextScene<Content> where Content : View
```

## Topics

### Initializers

- [init(content:)](translationuiproviderselectedtextscene/init%28content_%29.md): Creates the scene to translate the user’s selected text, with the provided View content.

## Relationships

### Conforms To

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TranslationUIProviderExtensionScene](translationuiproviderextensionscene.md)

## See Also

### Configuration and text selection

- [TranslationProviderUIExtensionConfiguration](translationprovideruiextensionconfiguration.md): The type for a translation UI provider extension’s configuration object.
