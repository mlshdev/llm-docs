> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferreduserinterfacestyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferreduserinterfacestyle)

# preferredUserInterfaceStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The preferred interface style for this view controller.

## Declaration

```swift
var preferredUserInterfaceStyle: UIUserInterfaceStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to apply a specific appearance in your tvOS app. The default value of this property is [UIUserInterfaceStyle.unspecified](../uiuserinterfacestyle/unspecified.md), which causes your view controller to follow the system’s current style. You can override this property to force the view controller to adopt a specific style.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate()](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.

# preferredUserInterfaceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The preferred interface style for this view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserInterfaceStyle preferredUserInterfaceStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property to apply a specific appearance in your tvOS app. The default value of this property is [UIUserInterfaceStyleUnspecified](../uiuserinterfacestyle/unspecified.md), which causes your view controller to follow the system’s current style. You can override this property to force the view controller to adopt a specific style.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
