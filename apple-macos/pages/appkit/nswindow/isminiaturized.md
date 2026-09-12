> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isminiaturized](https://developer.apple.com/documentation/appkit/nswindow/isminiaturized)

# isMiniaturized (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is minimized.

## Declaration

```swift
var isMiniaturized: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is minimized; otherwise, [false](https://developer.apple.com/documentation/swift/false). A minimized window is removed from the screen and replaced by a image, icon, or button that represents it, called the counterpart.

## See Also

### Minimizing Windows

- [performMiniaturize(\_:)](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize(\_:)](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize(\_:)](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

# miniaturized (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is minimized.

## Declaration

```objectivec
@property (readonly, getter=isMiniaturized) BOOL miniaturized;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is minimized; otherwise, [false](https://developer.apple.com/documentation/swift/false). A minimized window is removed from the screen and replaced by a image, icon, or button that represents it, called the counterpart.

## See Also

### Minimizing Windows

- [performMiniaturize:](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize:](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize:](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.
