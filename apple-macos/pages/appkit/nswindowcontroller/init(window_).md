> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/init(window:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/init(window:))

# init(window:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a window controller initialized with a given window.

## Declaration

```swift
init(window: NSWindow?)
```

## Parameters

- `window`: The window object to manage; can be `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized window controller.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSWindowController`.

This initializer is useful when a window has been loaded but no window controller is assigned. The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the window frame autosave name to an empty string. As a side effect, the created window controller is added as an observer of the [willCloseNotification](../nswindow/willclosenotification.md) posted by that window object (which is handled by a private method). If you make the window controller a delegate of the window, you can implement the [NSWindow](../nswindow.md) delegate method `windowShouldClose(_:)`.

## See Also

### Initializing Window Controllers

- [init(windowNibName:)](init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [init(windowNibName:owner:)](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [init(windowNibPath:owner:)](init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.

# initWithWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a window controller initialized with a given window.

## Declaration

```objectivec
- (instancetype) initWithWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window object to manage; can be `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized window controller.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSWindowController`.

This initializer is useful when a window has been loaded but no window controller is assigned. The default initialization turns on cascading, sets the [shouldCloseDocument](shouldclosedocument.md) property to [false](https://developer.apple.com/documentation/swift/false), and sets the window frame autosave name to an empty string. As a side effect, the created window controller is added as an observer of the [NSWindowWillCloseNotification](../nswindow/willclosenotification.md) posted by that window object (which is handled by a private method). If you make the window controller a delegate of the window, you can implement the [NSWindow](../nswindow.md) delegate method `windowShouldClose(_:)`.

## See Also

### Initializing Window Controllers

- [initWithWindowNibName:](init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [initWithWindowNibName:owner:](init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [initWithWindowNibPath:owner:](init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.
