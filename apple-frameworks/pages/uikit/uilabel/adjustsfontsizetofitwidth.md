> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/adjustsfontsizetofitwidth](https://developer.apple.com/documentation/uikit/uilabel/adjustsfontsizetofitwidth)

# adjustsFontSizeToFitWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.

## Declaration

```swift
var adjustsFontSizeToFitWidth: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Normally, the label draws the text with the font you specify in the [font](font.md) property. If this property is [true](https://developer.apple.com/documentation/swift/true), and the text in the [text](text.md) property exceeds the label’s bounding rectangle, the label reduces the font size until the text fits or it has scaled the font down to the minimum font size. The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you change it to [true](https://developer.apple.com/documentation/swift/true), be sure that you also set an appropriate minimum font scale by modifying the [minimumScaleFactor](minimumscalefactor.md) property. This autoshrinking behavior is only intended for use with a single-line label.

To enable [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) in Interface Builder, choose Minimum Font Scale from the Autoshrink pop-up menu in the label’s Attributes inspector.

## See Also

### Related Documentation

- [font](font.md): The font of the text.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

### Sizing the label’s text

- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# adjustsFontSizeToFitWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsFontSizeToFitWidth;
```

<a id="Discussion"></a>

## Discussion

Normally, the label draws the text with the font you specify in the [font](font.md) property. If this property is [true](https://developer.apple.com/documentation/swift/true), and the text in the [text](text.md) property exceeds the label’s bounding rectangle, the label reduces the font size until the text fits or it has scaled the font down to the minimum font size. The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you change it to [true](https://developer.apple.com/documentation/swift/true), be sure that you also set an appropriate minimum font scale by modifying the [minimumScaleFactor](minimumscalefactor.md) property. This autoshrinking behavior is only intended for use with a single-line label.

To enable [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) in Interface Builder, choose Minimum Font Scale from the Autoshrink pop-up menu in the label’s Attributes inspector.

## See Also

### Related Documentation

- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
- [font](font.md): The font of the text.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

### Sizing the label’s text

- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [adjustsLetterSpacingToFitWidth](adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
