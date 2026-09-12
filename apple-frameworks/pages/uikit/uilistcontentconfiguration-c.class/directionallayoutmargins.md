> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-c.class/directionallayoutmargins](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/directionallayoutmargins)

# directionalLayoutMargins

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The margins between the content and the edges of the content view.

## Declaration

```objectivec
@property (nonatomic) NSDirectionalEdgeInsets directionalLayoutMargins;
```

<a id="Discussion"></a>

## Discussion

When you preserve superview layout margins on one or both axes, this value specifies the minimum margins. The inherited margins may be larger.

By default, the content view preserves the layout margins of its superview on both axes. You can customize this behavior by changing [axesPreservingSuperviewLayoutMargins](../uilistcontentconfiguration-swift.struct/axespreservingsuperviewlayoutmargins.md).

## See Also

### Customizing layout

- [axesPreservingSuperviewLayoutMargins](axespreservingsuperviewlayoutmargins.md): A Boolean value that detemines whether the content view preserves the layout margins that it inherits from its superview on the horizontal or vertical axes.
- [prefersSideBySideTextAndSecondaryText](preferssidebysidetextandsecondarytext.md): A Boolean value that determines whether the configuration positions the text and secondary text side by side.
- [imageToTextPadding](imagetotextpadding.md): The padding between the image and text.
- [textToSecondaryTextHorizontalPadding](texttosecondarytexthorizontalpadding.md): The minimum horizontal padding between the text and secondary text.
- [textToSecondaryTextVerticalPadding](texttosecondarytextverticalpadding.md): The vertical padding between the text and secondary text.
