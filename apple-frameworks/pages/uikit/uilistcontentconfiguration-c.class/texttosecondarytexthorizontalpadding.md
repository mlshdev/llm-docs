> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-c.class/texttosecondarytexthorizontalpadding](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/texttosecondarytexthorizontalpadding)

# textToSecondaryTextHorizontalPadding

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The minimum horizontal padding between the text and secondary text.

## Declaration

```objectivec
@property (nonatomic) CGFloat textToSecondaryTextHorizontalPadding;
```

<a id="Discussion"></a>

## Discussion

This value only applies when there’s both text and secondary text, and they’re in a side-by-side layout that [prefersSideBySideTextAndSecondaryText](../uilistcontentconfiguration-swift.struct/preferssidebysidetextandsecondarytext.md) specifies.

## See Also

### Customizing layout

- [axesPreservingSuperviewLayoutMargins](axespreservingsuperviewlayoutmargins.md): A Boolean value that detemines whether the content view preserves the layout margins that it inherits from its superview on the horizontal or vertical axes.
- [directionalLayoutMargins](directionallayoutmargins.md): The margins between the content and the edges of the content view.
- [prefersSideBySideTextAndSecondaryText](preferssidebysidetextandsecondarytext.md): A Boolean value that determines whether the configuration positions the text and secondary text side by side.
- [imageToTextPadding](imagetotextpadding.md): The padding between the image and text.
- [textToSecondaryTextVerticalPadding](texttosecondarytextverticalpadding.md): The vertical padding between the text and secondary text.
