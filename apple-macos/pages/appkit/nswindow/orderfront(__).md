> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/orderfront(_:)](https://developer.apple.com/documentation/appkit/nswindow/orderfront(_:))

# orderFront(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of its level in the screen list, without changing either the key window or the main window.

## Declaration

```swift
func orderFront(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

The default animation based on the window type will be used when the window is ordered front unless it has been modified by the [animationBehavior](animationbehavior-swift.property.md) property.

## See Also

### Related Documentation

- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindow.Level](level-swift.struct.md): The standard window levels in macOS.

# orderFront: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Moves the window to the front of its level in the screen list, without changing either the key window or the main window.

## Declaration

```objectivec
- (void) orderFront:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

The default animation based on the window type will be used when the window is ordered front unless it has been modified by the [animationBehavior](animationbehavior-swift.property.md) property.

## See Also

### Related Documentation

- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
- [NSWindowLevel](level-swift.struct.md): The standard window levels in macOS.
