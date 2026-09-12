> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsuserinterfaceappearanceupdate()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsuserinterfaceappearanceupdate())

# setNeedsUserInterfaceAppearanceUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Notifies the view controller that a change occurred that might affect the preferred interface style.

## Declaration

```swift
func setNeedsUserInterfaceAppearanceUpdate()
```

<a id="Discussion"></a>

## Discussion

UIKit calls this method to let the view controller know when system-level interface style changes occur. You can also call it to let UIKit know when you change your view controller in a way that affects the preferred user interface style.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.

# setNeedsUserInterfaceAppearanceUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Notifies the view controller that a change occurred that might affect the preferred interface style.

## Declaration

```objectivec
- (void) setNeedsUserInterfaceAppearanceUpdate;
```

<a id="Discussion"></a>

## Discussion

UIKit calls this method to let the view controller know when system-level interface style changes occur. You can also call it to let UIKit know when you change your view controller in a way that affects the preferred user interface style.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
