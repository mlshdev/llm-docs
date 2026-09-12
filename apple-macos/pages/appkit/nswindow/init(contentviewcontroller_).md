> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/init(contentviewcontroller:)](https://developer.apple.com/documentation/appkit/nswindow/init(contentviewcontroller:))

# init(contentViewController:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a titled window that contains the specified content view controller.

## Declaration

```swift
convenience init(contentViewController: NSViewController)
```

## Parameters

- `contentViewController`: The view controller that provides the main content view for the window. The window’s [contentView](contentview.md) property is set to ```contentViewController``.view```.

<a id="return-value"></a>

## Return Value

A window with the content view controller set to the passed-in view controller object.

<a id="Discussion"></a>

## Discussion

This method creates a basic window object that is titled, closable, resizable, and miniaturizable. By default, the window’s title is automatically bound to the title of `contentViewController`. You can control the size of the window by using Auto Layout and applying size constraints to the view or its subviews. The initial size of the window is set to the initial size of [contentView](contentview.md) (that is, the size of ```contentViewController``.view```). The newly created window has [isReleasedWhenClosed](isreleasedwhenclosed.md) set to [false](https://developer.apple.com/documentation/swift/false), and it must be explicitly retained to keep the window instance alive.

## See Also

### Related Documentation

- [Window Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Introduction.html#//apple_ref/doc/uid/10000031i)
- [contentViewController](contentviewcontroller.md): The main content view controller for the window.

### Creating a Window

- [init(contentRect:styleMask:backing:defer:)](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.
- [init(contentRect:styleMask:backing:defer:screen:)](init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.

# windowWithContentViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Creates a titled window that contains the specified content view controller.

## Declaration

```objectivec
+ (instancetype) windowWithContentViewController:(NSViewController *) contentViewController;
```

## Parameters

- `contentViewController`: The view controller that provides the main content view for the window. The window’s [contentView](contentview.md) property is set to ```contentViewController``.view```.

<a id="return-value"></a>

## Return Value

A window with the content view controller set to the passed-in view controller object.

<a id="Discussion"></a>

## Discussion

This method creates a basic window object that is titled, closable, resizable, and miniaturizable. By default, the window’s title is automatically bound to the title of `contentViewController`. You can control the size of the window by using Auto Layout and applying size constraints to the view or its subviews. The initial size of the window is set to the initial size of [contentView](contentview.md) (that is, the size of ```contentViewController``.view```). The newly created window has [releasedWhenClosed](isreleasedwhenclosed.md) set to [false](https://developer.apple.com/documentation/swift/false), and it must be explicitly retained to keep the window instance alive.

## See Also

### Related Documentation

- [Window Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Introduction.html#//apple_ref/doc/uid/10000031i)
- [contentViewController](contentviewcontroller.md): The main content view controller for the window.

### Creating a Window

- [initWithContentRect:styleMask:backing:defer:](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.
- [initWithContentRect:styleMask:backing:defer:screen:](init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.
