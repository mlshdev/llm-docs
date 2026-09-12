> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/text](https://developer.apple.com/documentation/uikit/uitextview/text)

# text (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the text view displays.

## Declaration

```swift
var text: String! { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 6 and later, assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, albeit without any inherent style attributes. Instead the text view styles the new string using the [font](font.md), [textColor](textcolor.md), and other style-related properties of the class.

## See Also

### Specifying the text content

- [attributedText](attributedtext.md): The styled text that the text view displays.

# text (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the text view displays.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSString * text;
```

<a id="Discussion"></a>

## Discussion

In iOS 6 and later, assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, albeit without any inherent style attributes. Instead the text view styles the new string using the [font](font.md), [textColor](textcolor.md), and other style-related properties of the class.

## See Also

### Specifying the text content

- [attributedText](attributedtext.md): The styled text that the text view displays.
