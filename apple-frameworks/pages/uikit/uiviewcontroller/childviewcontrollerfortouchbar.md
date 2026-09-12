> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childviewcontrollerfortouchbar](https://developer.apple.com/documentation/uikit/uiviewcontroller/childviewcontrollerfortouchbar)

# childViewControllerForTouchBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The child view controller that the system uses to display content in the Touch Bar.

## Declaration

```swift
var childViewControllerForTouchBar: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

Override this property to have the system use the [touchBar](../uiresponder/touchbar.md) object from a child view controller instead of the current view controller. If [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md) is `nil`, the system uses the current view controller’s [touchBar](../uiresponder/touchbar.md) object.

The default value is `nil`.

## See Also

### Managing the Touch Bar

- [setNeedsTouchBarUpdate()](setneedstouchbarupdate%28%29.md): Tells the system to update the Touch Bar.

# childViewControllerForTouchBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The child view controller that the system uses to display content in the Touch Bar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForTouchBar;
```

<a id="Discussion"></a>

## Discussion

Override this property to have the system use the [touchBar](../uiresponder/touchbar.md) object from a child view controller instead of the current view controller. If [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md) is `nil`, the system uses the current view controller’s [touchBar](../uiresponder/touchbar.md) object.

The default value is `nil`.

## See Also

### Managing the Touch Bar

- [setNeedsTouchBarUpdate](setneedstouchbarupdate%28%29.md): Tells the system to update the Touch Bar.
