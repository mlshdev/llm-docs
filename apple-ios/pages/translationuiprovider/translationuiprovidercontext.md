> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider/translationuiprovidercontext](https://developer.apple.com/documentation/translationuiprovider/translationuiprovidercontext)

# TranslationUIProviderContext

**Framework:** TranslationUIProvider  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An object that encapsulates the XPC communication between the host process and the third-party extension implementation.

## Declaration

```swift
protocol TranslationUIProviderContext : Observable
```

<a id="Discussion"></a>

## Discussion

The framework provides information to the extension through the two observable properties [inputText](translationuiprovidercontext/inputtext.md) and [allowsReplacement](translationuiprovidercontext/allowsreplacement.md), and the extension calls back to the host process using the functions [finish(translation:)](translationuiprovidercontext/finish%28translation_%29.md) and, optionally [expandSheet()](translationuiprovidercontext/expandsheet%28%29.md).

## Topics

### Instance Properties

- [allowsReplacement](translationuiprovidercontext/allowsreplacement.md): A Boolean value that indicates whether the control can replace the source text.
- [inputText](translationuiprovidercontext/inputtext.md): The source text to translate.

### Instance Methods

- [expandSheet()](translationuiprovidercontext/expandsheet%28%29.md): The framework requests that the sheet expand.
- [finish(translation:)](translationuiprovidercontext/finish%28translation_%29.md): Completes the translation after which the framework closes the sheet.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### Creating translation app extensions

- [TranslationUIProviderExtension](translationuiproviderextension.md): A protocol that translation apps implement to provide a text-selection view.
- [TranslationUIProviderExtensionScene](translationuiproviderextensionscene.md): The protocol this extension’s scene need to implement.
