> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/inserttitlebaraccessoryviewcontroller(_:at:)](https://developer.apple.com/documentation/appkit/nswindow/inserttitlebaraccessoryviewcontroller(_:at:))

# insertTitlebarAccessoryViewController(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.

## Declaration

```swift
func insertTitlebarAccessoryViewController(_ childViewController: NSTitlebarAccessoryViewController, at index: Int)
```

## Parameters

- `childViewController`: The title bar accessory view controller to insert.
- `index`: The index at which to insert `childViewController`.

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController(\_:)](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [removeTitlebarAccessoryViewController(at:)](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.

# insertTitlebarAccessoryViewController:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.

## Declaration

```objectivec
- (void) insertTitlebarAccessoryViewController:(NSTitlebarAccessoryViewController *) childViewController atIndex:(NSInteger) index;
```

## Parameters

- `childViewController`: The title bar accessory view controller to insert.
- `index`: The index at which to insert `childViewController`.

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController:](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [removeTitlebarAccessoryViewControllerAtIndex:](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.
