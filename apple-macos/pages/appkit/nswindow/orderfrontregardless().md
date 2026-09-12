> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/orderfrontregardless()](https://developer.apple.com/documentation/appkit/nswindow/orderfrontregardless())

# orderFrontRegardless() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.

## Declaration

```swift
func orderFrontRegardless()
```

<a id="Discussion"></a>

## Discussion

Normally an `NSWindow` object can’t be moved in front of the key window unless it and the key window are in the same application. You should rarely need to invoke this method; it’s designed to be used when applications are cooperating in such a way that an active application (with the key window) is using another application to display data.

## See Also

### Managing Window Layers

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindow.Level](level-swift.struct.md): The standard window levels in macOS.

# orderFrontRegardless (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.

## Declaration

```objectivec
- (void) orderFrontRegardless;
```

<a id="Discussion"></a>

## Discussion

Normally an `NSWindow` object can’t be moved in front of the key window unless it and the key window are in the same application. You should rarely need to invoke this method; it’s designed to be used when applications are cooperating in such a way that an active application (with the key window) is using another application to display data.

## See Also

### Managing Window Layers

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindowLevel](level-swift.struct.md): The standard window levels in macOS.
