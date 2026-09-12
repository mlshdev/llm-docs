> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider/translationuiproviderextension](https://developer.apple.com/documentation/translationuiprovider/translationuiproviderextension)

# TranslationUIProviderExtension

**Framework:** TranslationUIProvider  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A protocol that translation apps implement to provide a text-selection view.

## Declaration

```swift
protocol TranslationUIProviderExtension : AppExtension
```

## Topics

### Associated Types

- [Body](translationuiproviderextension/body-swift.associatedtype.md): The type for this UI providers extensions’s body

### Instance Properties

- [body](translationuiproviderextension/body-swift.property.md): The content and behavior of the UI provider extensions’s interface.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)

## See Also

### Creating translation app extensions

- [TranslationUIProviderContext](translationuiprovidercontext.md): An object that encapsulates the XPC communication between the host process and the third-party extension implementation.
- [TranslationUIProviderExtensionScene](translationuiproviderextensionscene.md): The protocol this extension’s scene need to implement.
