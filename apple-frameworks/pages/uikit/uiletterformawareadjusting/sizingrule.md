> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiletterformawareadjusting/sizingrule](https://developer.apple.com/documentation/uikit/uiletterformawareadjusting/sizingrule)

# sizingRule (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

## Declaration

```swift
var sizingRule: UILetterformAwareSizingRule { get set }
```

<a id="Discussion"></a>

## Discussion

For more information on sizing behaviors, see [UILetterformAwareAdjusting](../uiletterformawareadjusting.md).

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](../uilabel/adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](../uilabel/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](../uilabel/baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](../uilabel/minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](../uilabel/numberoflines.md): The maximum number of lines for rendering text.

# sizingRule (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

## Declaration

```objectivec
@property (nonatomic) UILetterformAwareSizingRule sizingRule;
```

<a id="Discussion"></a>

## Discussion

For more information on sizing behaviors, see [UILetterformAwareAdjusting](../uiletterformawareadjusting.md).

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](../uilabel/adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](../uilabel/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](../uilabel/baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](../uilabel/minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](../uilabel/numberoflines.md): The maximum number of lines for rendering text.
- [adjustsLetterSpacingToFitWidth](../uilabel/adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](../uilabel/minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
