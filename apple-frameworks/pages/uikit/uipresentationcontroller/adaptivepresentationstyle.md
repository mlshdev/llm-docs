> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/adaptivepresentationstyle](https://developer.apple.com/documentation/uikit/uipresentationcontroller/adaptivepresentationstyle)

# adaptivePresentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the presentation style to use when the presented view controller becomes horizontally compact.

## Declaration

```swift
var adaptivePresentationStyle: UIModalPresentationStyle { get }
```

<a id="return-value"></a>

## Return Value

The value provided by the presentation controller’s delegate or [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md) if a delegate was not provided or does not return a valid value.

<a id="Discussion"></a>

## Discussion

After the content managed by the presentation controller is onscreen, this method returns the presentation style to use when transitioning to a horizontally compact environment. This method is not meant to be overridden. The implementation consults its delegate object and returns the value provided by that object’s [adaptivePresentationStyle(for:)](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md) method. Some system-supplied presentation controllers may also provide a new style that is more suited for a compact environment. For example, presentation controllers that manage popovers and form sheets return the [UIModalPresentationStyle.fullScreen](../uimodalpresentationstyle/fullscreen.md) value.

This method only returns the presentation style to use in a horizontally compact environment. It does not initiate a transition to the new style. The system initiates the transition to the new style when the size class actually changes. When transitioning to a new style, the actual presentation controller object may change. As a result, do not cache the presentation controller object in your code. Always retrieve it from your view controller’s [presentationController](../uiviewcontroller/presentationcontroller.md) property.

In iOS 8.3 and later, UIKit calls the [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md) method to retrieve presentation styles instead of this one.

## See Also

### Getting the presentation attributes

- [presentationStyle](presentationstyle.md): The presentation style of the presented view controller.
- [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [shouldPresentInFullscreen](shouldpresentinfullscreen.md): A Boolean value indicating whether the presentation covers the entire screen.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.

# adaptivePresentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the presentation style to use when the presented view controller becomes horizontally compact.

## Declaration

```objectivec
@property (nonatomic, readonly) UIModalPresentationStyle adaptivePresentationStyle;
```

<a id="return-value"></a>

## Return Value

The value provided by the presentation controller’s delegate or [UIModalPresentationNone](../uimodalpresentationstyle/none.md) if a delegate was not provided or does not return a valid value.

<a id="Discussion"></a>

## Discussion

After the content managed by the presentation controller is onscreen, this method returns the presentation style to use when transitioning to a horizontally compact environment. This method is not meant to be overridden. The implementation consults its delegate object and returns the value provided by that object’s [adaptivePresentationStyleForPresentationController:](../uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md) method. Some system-supplied presentation controllers may also provide a new style that is more suited for a compact environment. For example, presentation controllers that manage popovers and form sheets return the [UIModalPresentationFullScreen](../uimodalpresentationstyle/fullscreen.md) value.

This method only returns the presentation style to use in a horizontally compact environment. It does not initiate a transition to the new style. The system initiates the transition to the new style when the size class actually changes. When transitioning to a new style, the actual presentation controller object may change. As a result, do not cache the presentation controller object in your code. Always retrieve it from your view controller’s [presentationController](../uiviewcontroller/presentationcontroller.md) property.

In iOS 8.3 and later, UIKit calls the [adaptivePresentationStyleForTraitCollection:](adaptivepresentationstyle%28for_%29.md) method to retrieve presentation styles instead of this one.

## See Also

### Getting the presentation attributes

- [presentationStyle](presentationstyle.md): The presentation style of the presented view controller.
- [adaptivePresentationStyleForTraitCollection:](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [shouldPresentInFullscreen](shouldpresentinfullscreen.md): A Boolean value indicating whether the presentation covers the entire screen.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.
