> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/axespreservingsuperviewlayoutmargins](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/axespreservingsuperviewlayoutmargins)

# axesPreservingSuperviewLayoutMargins

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A Boolean value that determines whether the content view preserves the layout margins that it inherits from its superview on the horizontal or vertical axes.

## Declaration

```swift
var axesPreservingSuperviewLayoutMargins: UIAxis { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the content view preserves the layout margins of its superview on [both](../uiaxis/both.md) axes.

## See Also

### Customizing layout

- [directionalLayoutMargins](directionallayoutmargins.md): The margins between the content and the edges of the content view.
- [prefersSideBySideTextAndSecondaryText](preferssidebysidetextandsecondarytext.md): A Boolean value that determines whether the configuration positions the text and secondary text side by side.
- [imageToTextPadding](imagetotextpadding.md): The padding between the image and text.
- [textToSecondaryTextHorizontalPadding](texttosecondarytexthorizontalpadding.md): The minimum horizontal padding between the text and secondary text.
- [textToSecondaryTextVerticalPadding](texttosecondarytextverticalpadding.md): The vertical padding between the text and secondary text.
