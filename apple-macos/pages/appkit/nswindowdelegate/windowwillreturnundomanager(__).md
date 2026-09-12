> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillreturnundomanager(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillreturnundomanager(_:))

# windowWillReturnUndoManager(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Tells the delegate that the window’s undo manager has been requested. Returns the appropriate undo manager for the window.

## Declaration

```swift
@MainActor optional func windowWillReturnUndoManager(_ window: NSWindow) -> UndoManager?
```

## Parameters

- `window`: The window whose undo manager is being requested.

<a id="return-value"></a>

## Return Value

The appropriate undo manager for the specified window.

<a id="Discussion"></a>

## Discussion

If this method is not implemented by the delegate, the window creates an[UndoManager](https://developer.apple.com/documentation/foundation/undomanager) for `window`. Further, after a window creates its own undo manager, this method is never again called on the delegate.

# windowWillReturnUndoManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window’s undo manager has been requested. Returns the appropriate undo manager for the window.

## Declaration

```objectivec
- (NSUndoManager *) windowWillReturnUndoManager:(NSWindow *) window;
```

## Parameters

- `window`: The window whose undo manager is being requested.

<a id="return-value"></a>

## Return Value

The appropriate undo manager for the specified window.

<a id="Discussion"></a>

## Discussion

If this method is not implemented by the delegate, the window creates an[NSUndoManager](https://developer.apple.com/documentation/foundation/undomanager) for `window`. Further, after a window creates its own undo manager, this method is never again called on the delegate.
