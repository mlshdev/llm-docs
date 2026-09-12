> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimodalpresentationstyle/none](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/none)

# UIModalPresentationStyle.none (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A presentation style that indicates no adaptations should be made.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

Do not use this style to present a view controller. Instead, return it from the [adaptivePresentationStyle(for:)](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md) method of an adaptive delegate when you do not want a presentation controller to adapt the style of an already presented view controller.

## See Also

### Presentations

- [UIModalPresentationStyle.automatic](automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationStyle.fullScreen](fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.pageSheet](pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationStyle.formSheet](formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationStyle.currentContext](currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.custom](custom.md): A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.
- [UIModalPresentationStyle.overFullScreen](overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.overCurrentContext](overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.popover](popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationStyle.blurOverFullScreen](bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.

# UIModalPresentationNone (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A presentation style that indicates no adaptations should be made.

## Declaration

```objectivec
UIModalPresentationNone
```

<a id="Discussion"></a>

## Discussion

Do not use this style to present a view controller. Instead, return it from the [adaptivePresentationStyleForPresentationController:](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md) method of an adaptive delegate when you do not want a presentation controller to adapt the style of an already presented view controller.

## See Also

### Presentations

- [UIModalPresentationAutomatic](automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationFullScreen](fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationPageSheet](pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationFormSheet](formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationCurrentContext](currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationCustom](custom.md): A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.
- [UIModalPresentationOverFullScreen](overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationOverCurrentContext](overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationPopover](popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationBlurOverFullScreen](bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.
