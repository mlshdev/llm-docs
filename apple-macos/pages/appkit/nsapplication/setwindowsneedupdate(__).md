> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/setwindowsneedupdate(_:)](https://developer.apple.com/documentation/appkit/nsapplication/setwindowsneedupdate(_:))

# setWindowsNeedUpdate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

## Declaration

```swift
func setWindowsNeedUpdate(_ needUpdate: Bool)
```

## Parameters

- `needUpdate`: If [true](https://developer.apple.com/documentation/swift/true), the receiver’s windows are updated after an event is processed.

<a id="Discussion"></a>

## Discussion

This method is especially useful for making sure menus are updated to reflect changes not initiated by user actions, such as messages received from remote objects.

## See Also

### Updating Windows

- [updateWindows()](updatewindows%28%29.md): Sends an [update()](../nswindow/update%28%29.md) message to each onscreen window.

# setWindowsNeedUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

## Declaration

```objectivec
- (void) setWindowsNeedUpdate:(BOOL) needUpdate;
```

## Parameters

- `needUpdate`: If [true](https://developer.apple.com/documentation/swift/true), the receiver’s windows are updated after an event is processed.

<a id="Discussion"></a>

## Discussion

This method is especially useful for making sure menus are updated to reflect changes not initiated by user actions, such as messages received from remote objects.

## See Also

### Updating Windows

- [updateWindows](updatewindows%28%29.md): Sends an [update](../nswindow/update%28%29.md) message to each onscreen window.
