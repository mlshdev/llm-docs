> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/removetitlebaraccessoryviewcontroller(at:)](https://developer.apple.com/documentation/appkit/nswindow/removetitlebaraccessoryviewcontroller(at:))

# removeTitlebarAccessoryViewController(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.

## Declaration

```swift
func removeTitlebarAccessoryViewController(at index: Int)
```

## Parameters

- `index`: The index in the array of title bar view controllers from which to remove the view controller.

<a id="Discussion"></a>

## Discussion

You can also use [removeFromParent()](../nsviewcontroller/removefromparent%28%29.md) to remove a specific title bar accessory view controller.

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController(\_:)](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController(\_:at:)](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.

# removeTitlebarAccessoryViewControllerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.

## Declaration

```objectivec
- (void) removeTitlebarAccessoryViewControllerAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index in the array of title bar view controllers from which to remove the view controller.

<a id="Discussion"></a>

## Discussion

You can also use [removeFromParentViewController](../nsviewcontroller/removefromparent%28%29.md) to remove a specific title bar accessory view controller.

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController:](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController:atIndex:](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.
