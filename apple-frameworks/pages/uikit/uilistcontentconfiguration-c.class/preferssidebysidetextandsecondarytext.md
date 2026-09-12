> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-c.class/preferssidebysidetextandsecondarytext](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/preferssidebysidetextandsecondarytext)

# prefersSideBySideTextAndSecondaryText

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the configuration positions the text and secondary text side by side.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersSideBySideTextAndSecondaryText;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the configuration positions the text and secondary text side by side if there’s sufficient space. Otherwise, the configuration stacks the text in a vertical layout.

## See Also

### Customizing layout

- [axesPreservingSuperviewLayoutMargins](axespreservingsuperviewlayoutmargins.md): A Boolean value that detemines whether the content view preserves the layout margins that it inherits from its superview on the horizontal or vertical axes.
- [directionalLayoutMargins](directionallayoutmargins.md): The margins between the content and the edges of the content view.
- [imageToTextPadding](imagetotextpadding.md): The padding between the image and text.
- [textToSecondaryTextHorizontalPadding](texttosecondarytexthorizontalpadding.md): The minimum horizontal padding between the text and secondary text.
- [textToSecondaryTextVerticalPadding](texttosecondarytextverticalpadding.md): The vertical padding between the text and secondary text.
