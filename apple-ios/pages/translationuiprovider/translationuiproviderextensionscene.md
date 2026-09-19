> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translationuiprovider/translationuiproviderextensionscene

# TranslationUIProviderExtensionScene

**Framework:** TranslationUIProvider  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The protocol this extension’s scene need to implement.

## Declaration

```swift
protocol TranslationUIProviderExtensionScene : AppExtensionScene
```

## Relationships

### Inherits From

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)

### Conforming Types

- [TranslationUIProviderSelectedTextScene](translationuiproviderselectedtextscene.md)

## See Also

### Creating translation app extensions

- [TranslationUIProviderContext](translationuiprovidercontext.md): An object that encapsulates the XPC communication between the host process and the third-party extension implementation.
- [TranslationUIProviderExtension](translationuiproviderextension.md): A protocol that translation apps implement to provide a text-selection view.
