> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/miniaturize(_:)](https://developer.apple.com/documentation/appkit/nswindow/miniaturize(_:))

# miniaturize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen list and displays the minimized window in the Dock.

## Declaration

```swift
func miniaturize(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Minimizing Windows

- [isMiniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize(\_:)](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [deminiaturize(\_:)](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

# miniaturize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen list and displays the minimized window in the Dock.

## Declaration

```objectivec
- (void) miniaturize:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Minimizing Windows

- [miniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize:](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [deminiaturize:](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.
