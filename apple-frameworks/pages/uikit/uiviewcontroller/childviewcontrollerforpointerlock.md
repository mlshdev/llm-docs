> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childviewcontrollerforpointerlock](https://developer.apple.com/documentation/uikit/uiviewcontroller/childviewcontrollerforpointerlock)

# childViewControllerForPointerLock (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A child view controller to query for the pointer lock preference.

## Declaration

```swift
var childViewControllerForPointerLock: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

Call [setNeedsUpdateOfPrefersPointerLocked()](setneedsupdateofpreferspointerlocked%28%29.md) if the child view controller that the system needs to query for the pointer lock preference changes.

## See Also

### Managing pointer lock state

- [prefersPointerLocked](preferspointerlocked.md): A Boolean value that indicates whether the view controller prefers to lock the pointer to a specific scene.
- [setNeedsUpdateOfPrefersPointerLocked()](setneedsupdateofpreferspointerlocked%28%29.md): Indicates that the view controller changed the pointer lock preference.

# childViewControllerForPointerLock (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A child view controller to query for the pointer lock preference.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForPointerLock;
```

<a id="Discussion"></a>

## Discussion

Call [setNeedsUpdateOfPrefersPointerLocked](setneedsupdateofpreferspointerlocked%28%29.md) if the child view controller that the system needs to query for the pointer lock preference changes.

## See Also

### Managing pointer lock state

- [prefersPointerLocked](preferspointerlocked.md): A Boolean value that indicates whether the view controller prefers to lock the pointer to a specific scene.
- [setNeedsUpdateOfPrefersPointerLocked](setneedsupdateofpreferspointerlocked%28%29.md): Indicates that the view controller changed the pointer lock preference.
