> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/minimumscalefactor](https://developer.apple.com/documentation/uikit/uilabel/minimumscalefactor)

# minimumScaleFactor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum scale factor for the label’s text.

## Declaration

```swift
var minimumScaleFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) is [true](https://developer.apple.com/documentation/swift/true), use this property to specify the smallest multiplier for the current font size that yields an acceptable font size for the label’s text. If you specify a value of `0` for this property, the label doesn’t scale the text down. The default value of this property is `0`.

To reveal the text field for editing minimum scale factor in Interface Builder, choose Minimum Font Scale from the Autoshrink pop-up menu in the label’s Attributes inspector.

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# minimumScaleFactor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum scale factor for the label’s text.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumScaleFactor;
```

<a id="Discussion"></a>

## Discussion

If the [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) is [true](https://developer.apple.com/documentation/swift/true), use this property to specify the smallest multiplier for the current font size that yields an acceptable font size for the label’s text. If you specify a value of `0` for this property, the label doesn’t scale the text down. The default value of this property is `0`.

To reveal the text field for editing minimum scale factor in Interface Builder, choose Minimum Font Scale from the Autoshrink pop-up menu in the label’s Attributes inspector.

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [adjustsLetterSpacingToFitWidth](adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
