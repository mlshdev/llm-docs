> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/overrideuserinterfacestyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/overrideuserinterfacestyle)

# overrideUserInterfaceStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The user interface style adopted by the view controller and all of its children.

## Declaration

```swift
var overrideUserInterfaceStyle: UIUserInterfaceStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to force the view controller to always adopt a light or dark interface style. The default value of this property is [UIUserInterfaceStyle.unspecified](../uiuserinterfacestyle/unspecified.md), which causes the view controller to inherit the interface style from the system or a parent view controller. If you assign a different value, the new style applies to the view controller, its entire view hierarchy, and any embedded child view controllers.

## See Also

### Adjusting the interface style

- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate()](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.

# overrideUserInterfaceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The user interface style adopted by the view controller and all of its children.

## Declaration

```objectivec
@property (nonatomic) UIUserInterfaceStyle overrideUserInterfaceStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property to force the view controller to always adopt a light or dark interface style. The default value of this property is [UIUserInterfaceStyleUnspecified](../uiuserinterfacestyle/unspecified.md), which causes the view controller to inherit the interface style from the system or a parent view controller. If you assign a different value, the new style applies to the view controller, its entire view hierarchy, and any embedded child view controllers.

## See Also

### Adjusting the interface style

- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
