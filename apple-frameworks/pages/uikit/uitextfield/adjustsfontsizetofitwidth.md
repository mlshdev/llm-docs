> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/adjustsfontsizetofitwidth](https://developer.apple.com/documentation/uikit/uitextfield/adjustsfontsizetofitwidth)

# adjustsFontSizeToFitWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to reduce the font size to fit the text string into the text field’s bounding rectangle.

## Declaration

```swift
var adjustsFontSizeToFitWidth: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Normally, the text field’s content is drawn with the font you specify in the [font](font.md) property. If this property is set to [true](https://developer.apple.com/documentation/swift/true), however, and the contents in the [text](text.md) property exceed the text field’s bounding rectangle, the receiver starts reducing the font size until the string fits or the minimum font size is reached. The text is shrunk along the baseline.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you change it to [true](https://developer.apple.com/documentation/swift/true), you should also set an appropriate minimum font size by modifying the [minimumFontSize](minimumfontsize.md) property.

## See Also

### Sizing the text field’s text

- [minimumFontSize](minimumfontsize.md): The size of the smallest permissible font when drawing the text field’s text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# adjustsFontSizeToFitWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to reduce the font size to fit the text string into the text field’s bounding rectangle.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsFontSizeToFitWidth;
```

<a id="Discussion"></a>

## Discussion

Normally, the text field’s content is drawn with the font you specify in the [font](font.md) property. If this property is set to [true](https://developer.apple.com/documentation/swift/true), however, and the contents in the [text](text.md) property exceed the text field’s bounding rectangle, the receiver starts reducing the font size until the string fits or the minimum font size is reached. The text is shrunk along the baseline.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you change it to [true](https://developer.apple.com/documentation/swift/true), you should also set an appropriate minimum font size by modifying the [minimumFontSize](minimumfontsize.md) property.

## See Also

### Sizing the text field’s text

- [minimumFontSize](minimumfontsize.md): The size of the smallest permissible font when drawing the text field’s text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
