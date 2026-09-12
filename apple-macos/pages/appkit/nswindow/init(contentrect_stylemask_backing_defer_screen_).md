> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/init(contentrect:stylemask:backing:defer:screen:)](https://developer.apple.com/documentation/appkit/nswindow/init(contentrect:stylemask:backing:defer:screen:))

# init(contentRect:styleMask:backing:defer:screen:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes an allocated window with the specified values.

## Declaration

```swift
convenience init(contentRect: NSRect, styleMask style: NSWindow.StyleMask, backing backingStoreType: NSWindow.BackingStoreType, defer flag: Bool, screen: NSScreen?)
```

## Parameters

- `contentRect`: Origin and size of the window’s content area in screen coordinates. The origin is relative to the origin of the provided screen. Note that the window server limits window position coordinates to ±16,000 and sizes to 10,000.
- `style`: The window’s style. It can be `NSBorderlessWindowMask`, or it can contain any of the options described in [NSWindow.StyleMask](stylemask-swift.struct.md), combined using the C bitwise OR operator. Borderless windows display none of the usual peripheral elements and are generally useful only for display or caching purposes; you should not usually need to create them. Also, note that a window’s style mask should include `NSTitledWindowMask` if it includes any of the others.
- `backingStoreType`: Specifies how the drawing done in the window is buffered by the window device; possible values are described in [NSWindow.BackingStoreType](backingstoretype.md).
- `flag`: Specifies whether the window server creates a window device for the window immediately. When [true](https://developer.apple.com/documentation/swift/true), the window server defers creating the window device until the window is moved onscreen. All display messages sent to the window or its views are postponed until the window is created, just before it’s moved onscreen.
- `screen`: Specifies the screen on which the window is positioned. The content rectangle is positioned relative to the bottom-left corner of `screen`. When `nil`, the content rectangle is positioned relative to (0, 0), which is the origin of the primary screen.

<a id="return-value"></a>

## Return Value

The initialized window.

<a id="Discussion"></a>

## Discussion

The primary screen is the one that contains the current key window or, if there is no key window, the one that contains the main menu. If there’s neither a key window nor a main menu (if there’s no active application), the primary screen is the one where the origin of the screen coordinate system is located.

> **Warning**

> Swift and Automatic Reference Counting (ARC) clients need to set the [isReleasedWhenClosed](isreleasedwhenclosed.md) property to [false](https://developer.apple.com/documentation/swift/false) to avoid releasing the window too many times.

## See Also

### Related Documentation

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.

### Creating a Window

- [init(contentViewController:)](init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.
- [init(contentRect:styleMask:backing:defer:)](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.

# initWithContentRect:styleMask:backing:defer:screen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes an allocated window with the specified values.

## Declaration

```objectivec
- (instancetype) initWithContentRect:(NSRect) contentRect styleMask:(NSWindowStyleMask) style backing:(NSBackingStoreType) backingStoreType defer:(BOOL) flag screen:(NSScreen *) screen;
```

## Parameters

- `contentRect`: Origin and size of the window’s content area in screen coordinates. The origin is relative to the origin of the provided screen. Note that the window server limits window position coordinates to ±16,000 and sizes to 10,000.
- `style`: The window’s style. It can be `NSBorderlessWindowMask`, or it can contain any of the options described in [NSWindowStyleMask](stylemask-swift.struct.md), combined using the C bitwise OR operator. Borderless windows display none of the usual peripheral elements and are generally useful only for display or caching purposes; you should not usually need to create them. Also, note that a window’s style mask should include `NSTitledWindowMask` if it includes any of the others.
- `backingStoreType`: Specifies how the drawing done in the window is buffered by the window device; possible values are described in [NSBackingStoreType](backingstoretype.md).
- `flag`: Specifies whether the window server creates a window device for the window immediately. When [true](https://developer.apple.com/documentation/swift/true), the window server defers creating the window device until the window is moved onscreen. All display messages sent to the window or its views are postponed until the window is created, just before it’s moved onscreen.
- `screen`: Specifies the screen on which the window is positioned. The content rectangle is positioned relative to the bottom-left corner of `screen`. When `nil`, the content rectangle is positioned relative to (0, 0), which is the origin of the primary screen.

<a id="return-value"></a>

## Return Value

The initialized window.

<a id="Discussion"></a>

## Discussion

The primary screen is the one that contains the current key window or, if there is no key window, the one that contains the main menu. If there’s neither a key window nor a main menu (if there’s no active application), the primary screen is the one where the origin of the screen coordinate system is located.

> **Warning**

> Swift and Automatic Reference Counting (ARC) clients need to set the [releasedWhenClosed](isreleasedwhenclosed.md) property to [false](https://developer.apple.com/documentation/swift/false) to avoid releasing the window too many times.

## See Also

### Related Documentation

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.

### Creating a Window

- [windowWithContentViewController:](init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.
- [initWithContentRect:styleMask:backing:defer:](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.
