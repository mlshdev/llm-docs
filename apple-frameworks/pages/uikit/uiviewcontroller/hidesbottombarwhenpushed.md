> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/hidesbottombarwhenpushed](https://developer.apple.com/documentation/uikit/uiviewcontroller/hidesbottombarwhenpushed)

# hidesBottomBarWhenPushed (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.

## Declaration

```swift
var hidesBottomBarWhenPushed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A view controller added as a child of a navigation controller can display an optional toolbar at the bottom of the screen. The value of this property on the topmost view controller determines whether the toolbar is visible. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar is hidden. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the bar is visible.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [setToolbarItems(\_:animated:)](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.

# hidesBottomBarWhenPushed (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS · watchOS

A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.

## Declaration

```objectivec
@property (nonatomic) BOOL hidesBottomBarWhenPushed;
```

<a id="Discussion"></a>

## Discussion

A view controller added as a child of a navigation controller can display an optional toolbar at the bottom of the screen. The value of this property on the topmost view controller determines whether the toolbar is visible. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar is hidden. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the bar is visible.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [setToolbarItems:animated:](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.
