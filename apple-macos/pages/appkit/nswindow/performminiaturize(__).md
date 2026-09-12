> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/performminiaturize(_:)](https://developer.apple.com/documentation/appkit/nswindow/performminiaturize(_:))

# performMiniaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.

## Declaration

```swift
func performMiniaturize(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

If the window doesn’t have a minimize button or can’t be minimized for some reason, the system emits the alert sound.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [close()](close%28%29.md): Removes the window from the screen.
- [performClose(\_:)](performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.

### Minimizing Windows

- [isMiniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [miniaturize(\_:)](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize(\_:)](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

# performMiniaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.

## Declaration

```objectivec
- (void) performMiniaturize:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

If the window doesn’t have a minimize button or can’t be minimized for some reason, the system emits the alert sound.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [close](close%28%29.md): Removes the window from the screen.
- [performClose:](performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.

### Minimizing Windows

- [miniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [miniaturize:](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize:](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.
