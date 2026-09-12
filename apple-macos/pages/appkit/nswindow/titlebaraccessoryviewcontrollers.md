> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/titlebaraccessoryviewcontrollers](https://developer.apple.com/documentation/appkit/nswindow/titlebaraccessoryviewcontrollers)

# titlebarAccessoryViewControllers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of title bar accessory view controllers that are currently added to the window.

## Declaration

```swift
var titlebarAccessoryViewControllers: [NSTitlebarAccessoryViewController] { get set }
```

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController(\_:)](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController(\_:at:)](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewController(at:)](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.

# titlebarAccessoryViewControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of title bar accessory view controllers that are currently added to the window.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSTitlebarAccessoryViewController *> * titlebarAccessoryViewControllers;
```

## See Also

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController:](addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController:atIndex:](inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewControllerAtIndex:](removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
