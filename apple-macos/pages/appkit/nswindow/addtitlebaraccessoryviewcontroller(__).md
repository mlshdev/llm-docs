> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/addtitlebaraccessoryviewcontroller(_:)](https://developer.apple.com/documentation/appkit/nswindow/addtitlebaraccessoryviewcontroller(_:))

# addTitlebarAccessoryViewController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds the specified title bar accessory view controller to the window.

## Declaration

```swift
func addTitlebarAccessoryViewController(_ childViewController: NSTitlebarAccessoryViewController)
```

## Parameters

- `childViewController`: An instance of [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) containing the view to add, along with where to place it and how it should behave in full screen mode.

## See Also

### Managing Title Bar Accessories

- [insertTitlebarAccessoryViewController(\_:at:)](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewController(at:)](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.

# addTitlebarAccessoryViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds the specified title bar accessory view controller to the window.

## Declaration

```objectivec
- (void) addTitlebarAccessoryViewController:(NSTitlebarAccessoryViewController *) childViewController;
```

## Parameters

- `childViewController`: An instance of [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) containing the view to add, along with where to place it and how it should behave in full screen mode.

## See Also

### Managing Title Bar Accessories

- [insertTitlebarAccessoryViewController:atIndex:](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewControllerAtIndex:](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.
