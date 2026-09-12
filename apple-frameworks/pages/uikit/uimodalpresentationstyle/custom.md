> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimodalpresentationstyle/custom](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/custom)

# UIModalPresentationStyle.custom (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.

## Declaration

```swift
case custom
```

<a id="Discussion"></a>

## Discussion

All of these objects are provided by the presented view controller’s transitioning delegate, which is an object that conforms to the [UIViewControllerTransitioningDelegate](../uiviewcontrollertransitioningdelegate.md) protocol. Before presenting a view controller using this style, set the view controller’s  [transitioningDelegate](../uiviewcontroller/transitioningdelegate.md) property to your custom transitioning delegate.

## See Also

### Presentations

- [UIModalPresentationStyle.automatic](automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationStyle.none](none.md): A presentation style that indicates no adaptations should be made.
- [UIModalPresentationStyle.fullScreen](fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.pageSheet](pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationStyle.formSheet](formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationStyle.currentContext](currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.overFullScreen](overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationStyle.overCurrentContext](overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationStyle.popover](popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationStyle.blurOverFullScreen](bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.

# UIModalPresentationCustom (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.

## Declaration

```objectivec
UIModalPresentationCustom
```

<a id="Discussion"></a>

## Discussion

All of these objects are provided by the presented view controller’s transitioning delegate, which is an object that conforms to the [UIViewControllerTransitioningDelegate](../uiviewcontrollertransitioningdelegate.md) protocol. Before presenting a view controller using this style, set the view controller’s  [transitioningDelegate](../uiviewcontroller/transitioningdelegate.md) property to your custom transitioning delegate.

## See Also

### Presentations

- [UIModalPresentationAutomatic](automatic.md): The default presentation style chosen by the system.
- [UIModalPresentationNone](none.md): A presentation style that indicates no adaptations should be made.
- [UIModalPresentationFullScreen](fullscreen.md): A presentation style in which the presented view covers the screen.
- [UIModalPresentationPageSheet](pagesheet.md): A presentation style that partially covers the underlying content.
- [UIModalPresentationFormSheet](formsheet.md): A presentation style that displays the content centered in the screen.
- [UIModalPresentationCurrentContext](currentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationOverFullScreen](overfullscreen.md): A view presentation style in which the presented view covers the screen.
- [UIModalPresentationOverCurrentContext](overcurrentcontext.md): A presentation style where the content is displayed over another view controller’s content.
- [UIModalPresentationPopover](popover.md): A presentation style where the content is displayed in a popover view.
- [UIModalPresentationBlurOverFullScreen](bluroverfullscreen.md): A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.
