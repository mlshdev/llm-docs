> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/deminiaturize(_:)](https://developer.apple.com/documentation/appkit/nswindow/deminiaturize(_:))

# deminiaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

De-minimizes the window.

## Declaration

```swift
func deminiaturize(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

Invoke this method to programmatically deminimize a minimized window in the Dock.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

### Minimizing Windows

- [isMiniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize(\_:)](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize(\_:)](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

# deminiaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

De-minimizes the window.

## Declaration

```objectivec
- (void) deminiaturize:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

Invoke this method to programmatically deminimize a minimized window in the Dock.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

### Minimizing Windows

- [miniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize:](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize:](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.
