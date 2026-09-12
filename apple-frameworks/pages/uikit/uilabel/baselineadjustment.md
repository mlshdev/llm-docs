> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/baselineadjustment](https://developer.apple.com/documentation/uikit/uilabel/baselineadjustment)

# baselineAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.

## Declaration

```swift
var baselineAdjustment: UIBaselineAdjustment { get set }
```

<a id="Discussion"></a>

## Discussion

If [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) is [true](https://developer.apple.com/documentation/swift/true), this property controls the behavior of the text baselines in situations where the text needs the font size adjusted in order to fit. The default value of this property is [UIBaselineAdjustment.alignBaselines](../uibaselineadjustment/alignbaselines.md). This property is effective only when the [numberOfLines](numberoflines.md) is `1`.

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# baselineAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.

## Declaration

```objectivec
@property (nonatomic) UIBaselineAdjustment baselineAdjustment;
```

<a id="Discussion"></a>

## Discussion

If [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) is [true](https://developer.apple.com/documentation/swift/true), this property controls the behavior of the text baselines in situations where the text needs the font size adjusted in order to fit. The default value of this property is [UIBaselineAdjustmentAlignBaselines](../uibaselineadjustment/alignbaselines.md). This property is effective only when the [numberOfLines](numberoflines.md) is `1`.

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [adjustsLetterSpacingToFitWidth](adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
