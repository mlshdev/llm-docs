> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/attributedtext](https://developer.apple.com/documentation/uikit/uitextview/attributedtext)

# attributedText (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The styled text that the text view displays.

## Declaration

```swift
@NSCopying var attributedText: NSAttributedString! { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also replaces the value of the [text](text.md) property with the same string data, albeit without any formatting information. In addition, the [font](font.md), [textColor](textcolor.md), and [textAlignment](textalignment.md) properties are updated to reflect the typing attributes of the text view.

## See Also

### Specifying the text content

- [text](text.md): The text that the text view displays.

# attributedText (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The styled text that the text view displays.

## Declaration

```objectivec
@property (copy, null_resettable) NSAttributedString * attributedText;
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also replaces the value of the [text](text.md) property with the same string data, albeit without any formatting information. In addition, the [font](font.md), [textColor](textcolor.md), and [textAlignment](textalignment.md) properties are updated to reflect the typing attributes of the text view.

## See Also

### Specifying the text content

- [text](text.md): The text that the text view displays.
