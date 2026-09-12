> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider/translationuiprovidercontext/finish(translation:)](https://developer.apple.com/documentation/translationuiprovider/translationuiprovidercontext/finish(translation:))

# finish(translation:)

**Framework:** TranslationUIProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Completes the translation after which the framework closes the sheet.

## Declaration

```swift
func finish(translation: AttributedString?)
```

## Parameters

- `translation`: The optional translation result. If `nil` and the source text allows replacement, no replacement takes place. If non-`nil` and the source text doesn’t allow replacement, framework ignores the parameter. It is recommended that providers attempt to preserve any attributes of the source text, but it is not a requirement.

## See Also

### Instance Methods

- [expandSheet()](expandsheet%28%29.md): The framework requests that the sheet expand.
