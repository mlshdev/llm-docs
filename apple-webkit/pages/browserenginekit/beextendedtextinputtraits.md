> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beextendedtextinputtraits](https://developer.apple.com/documentation/browserenginekit/beextendedtextinputtraits)

# BEExtendedTextInputTraits (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that customizes text-input appearance and behavior beyond the standard system traits.

## Declaration

```swift
protocol BEExtendedTextInputTraits : UITextInputTraits
```

<a id="overview"></a>

## Overview

This class extends the standard text input traits to control cursor and selection colors, as well as single-line mode and typing adaptation in web content.

## Topics

### Customizing text input visuals

- [insertionPointColor](beextendedtextinputtraits/insertionpointcolor.md): A color for the text cursor at the insertion point.
- [selectionHandleColor](beextendedtextinputtraits/selectionhandlecolor.md): A color that customizes the look of the handle.
- [selectionHighlightColor](beextendedtextinputtraits/selectionhighlightcolor.md): The highlight color of a rectangle.

### Customizing text input behavior

- [isSingleLineDocument](beextendedtextinputtraits/issinglelinedocument.md): A Boolean value that represents whether the active web input field is a single line document.
- [isTypingAdaptationEnabled](beextendedtextinputtraits/istypingadaptationenabled.md): A Boolean value that controls whether the system learns new words and corrections.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UITextInputTraits](https://developer.apple.com/documentation/uikit/uitextinputtraits)

## See Also

### Information about text

- [BEDirectionalTextRange](bedirectionaltextrange.md): Modifications to text length based on its offset.

# BEExtendedTextInputTraits (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that customizes text-input appearance and behavior beyond the standard system traits.

## Declaration

```objectivec
@protocol BEExtendedTextInputTraits <UITextInputTraits>
```

<a id="overview"></a>

## Overview

This class extends the standard text input traits to control cursor and selection colors, as well as single-line mode and typing adaptation in web content.

## Topics

### Customizing text input visuals

- [insertionPointColor](beextendedtextinputtraits/insertionpointcolor.md): A color for the text cursor at the insertion point.
- [selectionHandleColor](beextendedtextinputtraits/selectionhandlecolor.md): A color that customizes the look of the handle.
- [selectionHighlightColor](beextendedtextinputtraits/selectionhighlightcolor.md): The highlight color of a rectangle.

### Customizing text input behavior

- [singleLineDocument](beextendedtextinputtraits/issinglelinedocument.md): A Boolean value that represents whether the active web input field is a single line document.
- [typingAdaptationEnabled](beextendedtextinputtraits/istypingadaptationenabled.md): A Boolean value that controls whether the system learns new words and corrections.

## Relationships

### Inherits From

- [UITextInputTraits](https://developer.apple.com/documentation/uikit/uitextinputtraits)

## See Also

### Information about text

- [BEDirectionalTextRange](bedirectionaltextrange.md): Modifications to text length based on its offset.
