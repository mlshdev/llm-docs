> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/level-swift.property](https://developer.apple.com/documentation/appkit/nswindow/level-swift.property)

# level (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window level of the window.

## Declaration

```swift
var level: NSWindow.Level { get set }
```

<a id="Discussion"></a>

## Discussion

See `Window Levels` for a list of possible values. Each level in the list groups windows within it in front of those in all preceding groups. Floating windows, for example, appear in front of all normal-level windows.

The constant `NSTornOffMenuWindowLevel` is preferable to its synonym, `NSSubmenuWindowLevel`.

## See Also

### Managing Window Layers

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [NSWindow.Level](level-swift.struct.md): The standard window levels in macOS.

# level (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window level of the window.

## Declaration

```objectivec
@property NSWindowLevel level;
```

<a id="Discussion"></a>

## Discussion

See `Window Levels` for a list of possible values. Each level in the list groups windows within it in front of those in all preceding groups. Floating windows, for example, appear in front of all normal-level windows.

The constant `NSTornOffMenuWindowLevel` is preferable to its synonym, `NSSubmenuWindowLevel`.

## See Also

### Managing Window Layers

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [NSWindowLevel](level-swift.struct.md): The standard window levels in macOS.
