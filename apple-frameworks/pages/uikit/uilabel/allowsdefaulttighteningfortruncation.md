> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/allowsdefaulttighteningfortruncation](https://developer.apple.com/documentation/uikit/uilabel/allowsdefaulttighteningfortruncation)

# allowsDefaultTighteningForTruncation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the label tightens text before truncating.

## Declaration

```swift
var allowsDefaultTighteningForTruncation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the label tightens intercharacter spacing of its text before allowing any truncation to occur. The label determines the maximum amount of tightening automatically based on the font, current line width, line break mode, and other relevant information. This autoshrinking behavior is only intended for use with a single-line label.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# allowsDefaultTighteningForTruncation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the label tightens text before truncating.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsDefaultTighteningForTruncation;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the label tightens intercharacter spacing of its text before allowing any truncation to occur. The label determines the maximum amount of tightening automatically based on the font, current line width, line break mode, and other relevant information. This autoshrinking behavior is only intended for use with a single-line label.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [adjustsLetterSpacingToFitWidth](adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
