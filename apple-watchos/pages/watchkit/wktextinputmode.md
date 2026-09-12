> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wktextinputmode](https://developer.apple.com/documentation/watchkit/wktextinputmode)

# WKTextInputMode (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS

The input modes supported by the text input controller.

## Declaration

```swift
enum WKTextInputMode
```

## Topics

### Constants

- [WKTextInputMode.plain](wktextinputmode/plain.md): Text from dictation and suggestions only. Do not allow emoji of any kind.
- [WKTextInputMode.allowEmoji](wktextinputmode/allowemoji.md): Text from dictation and suggestions plus non animated emoji.
- [WKTextInputMode.allowAnimatedEmoji](wktextinputmode/allowanimatedemoji.md): Deprecated. Text from dictation and suggestions plus both animated and non animated emoji.

### Initializers

- [init(rawValue:)](wktextinputmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling text input

- [presentTextInputController(withSuggestions:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestions(forLanguage:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [dismissTextInputController()](wkinterfacecontroller/dismisstextinputcontroller%28%29.md): Dismisses the text input controller without returning any text.

# WKTextInputMode (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS

The input modes supported by the text input controller.

## Declaration

```objectivec
enum WKTextInputMode : NSInteger;
```

## Topics

### Constants

- [WKTextInputModePlain](wktextinputmode/plain.md): Text from dictation and suggestions only. Do not allow emoji of any kind.
- [WKTextInputModeAllowEmoji](wktextinputmode/allowemoji.md): Text from dictation and suggestions plus non animated emoji.
- [WKTextInputModeAllowAnimatedEmoji](wktextinputmode/allowanimatedemoji.md): Deprecated. Text from dictation and suggestions plus both animated and non animated emoji.

## See Also

### Handling text input

- [presentTextInputControllerWithSuggestions:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestionsForLanguage:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [dismissTextInputController](wkinterfacecontroller/dismisstextinputcontroller%28%29.md): Dismisses the text input controller without returning any text.
