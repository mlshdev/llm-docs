> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/autocapitalization(_:)](https://developer.apple.com/documentation/swiftui/view/autocapitalization(_:))

# autocapitalization(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sets whether to apply auto-capitalization to this view.

> Use [textInputAutocapitalization(\_:)](textinputautocapitalization%28__%29.md) instead.

## Declaration

```swift
nonisolated func autocapitalization(_ style: UITextAutocapitalizationType) -> some View

```

## Parameters

- `style`: One of the autocapitalization modes defined in the [UITextAutocapitalizationType](https://developer.apple.com/documentation/uikit/uitextautocapitalizationtype) enumeration.

<a id="discussion"></a>

## Discussion

Use this method when you need to automatically capitalize words, sentences, or other text like proper nouns.

In example below, as the user enters text each word is automatically capitalized:

```swift
TextField("Last, First", text: $fullName)
    .autocapitalization(UITextAutocapitalizationType.words)
```

The [UITextAutocapitalizationType](https://developer.apple.com/documentation/uikit/uitextautocapitalizationtype) enumeration defines the available capitalization modes. The default is [UITextAutocapitalizationType.sentences](https://developer.apple.com/documentation/uikit/uitextautocapitalizationtype/sentences).

## See Also

### Text modifiers

- [disableAutocorrection(\_:)](disableautocorrection%28__%29.md): Deprecated. Sets whether to disable autocorrection for this view.
