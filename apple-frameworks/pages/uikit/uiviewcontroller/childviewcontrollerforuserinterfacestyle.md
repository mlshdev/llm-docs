> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childviewcontrollerforuserinterfacestyle](https://developer.apple.com/documentation/uikit/uiviewcontroller/childviewcontrollerforuserinterfacestyle)

# childViewControllerForUserInterfaceStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The child view controller that supports the preferred user interface style.

## Declaration

```swift
var childViewControllerForUserInterfaceStyle: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. A container view controller can override this property and return the child view controller that supports the currently preferred user interface style, as determined by the [preferredUserInterfaceStyle](preferreduserinterfacestyle.md) property.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [setNeedsUserInterfaceAppearanceUpdate()](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.

# childViewControllerForUserInterfaceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The child view controller that supports the preferred user interface style.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForUserInterfaceStyle;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. A container view controller can override this property and return the child view controller that supports the currently preferred user interface style, as determined by the [preferredUserInterfaceStyle](preferreduserinterfacestyle.md) property.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [setNeedsUserInterfaceAppearanceUpdate](setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
