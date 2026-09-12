> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardappearance](https://developer.apple.com/documentation/uikit/uikeyboardappearance)

# UIKeyboardAppearance (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the appearance of the keyboard for a text-based view.

## Declaration

```swift
enum UIKeyboardAppearance
```

<a id="overview"></a>

## Overview

Use these constants with the [keyboardAppearance](uitextinputtraits/keyboardappearance.md) property.

## Topics

### Constants

- [UIKeyboardAppearance.default](uikeyboardappearance/default.md): Specifies the default keyboard appearance for the current input method.
- [UIKeyboardAppearance.dark](uikeyboardappearance/dark.md): Specifies a keyboard appearance suitable for a dark UI look.
- [UIKeyboardAppearance.light](uikeyboardappearance/light.md): Specifies a keyboard appearance suitable for a light UI look.
- [alert](uikeyboardappearance/alert.md): Deprecated. Specifies a keyboard appearance suitable for an alert panel.

### Initializers

- [init(rawValue:)](uikeyboardappearance/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

# UIKeyboardAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the appearance of the keyboard for a text-based view.

## Declaration

```objectivec
enum UIKeyboardAppearance : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [keyboardAppearance](uitextinputtraits/keyboardappearance.md) property.

## Topics

### Constants

- [UIKeyboardAppearanceDefault](uikeyboardappearance/default.md): Specifies the default keyboard appearance for the current input method.
- [UIKeyboardAppearanceDark](uikeyboardappearance/dark.md): Specifies a keyboard appearance suitable for a dark UI look.
- [UIKeyboardAppearanceLight](uikeyboardappearance/light.md): Specifies a keyboard appearance suitable for a light UI look.
- [UIKeyboardAppearanceAlert](uikeyboardappearance/alert.md): Deprecated. Specifies a keyboard appearance suitable for an alert panel.

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.
