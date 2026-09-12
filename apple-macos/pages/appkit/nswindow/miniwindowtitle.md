> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/miniwindowtitle](https://developer.apple.com/documentation/appkit/nswindow/miniwindowtitle)

# miniwindowTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed in the window’s minimized window.

## Declaration

```swift
var miniwindowTitle: String! { get set }
```

<a id="Discussion"></a>

## Discussion

A minimized window’s title usually reflects that of its full-size counterpart, abbreviated to fit if necessary. Although this property allows you to set the minimized window’s title explicitly, changing the full-size `NSWindow` object’s title (through [title](title.md) or [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md)) automatically changes the minimized window’s title as well.

## See Also

### Minimizing Windows

- [isMiniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize(\_:)](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize(\_:)](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize(\_:)](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.

# miniwindowTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed in the window’s minimized window.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * miniwindowTitle;
```

<a id="Discussion"></a>

## Discussion

A minimized window’s title usually reflects that of its full-size counterpart, abbreviated to fit if necessary. Although this property allows you to set the minimized window’s title explicitly, changing the full-size `NSWindow` object’s title (through [title](title.md) or [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md)) automatically changes the minimized window’s title as well.

## See Also

### Minimizing Windows

- [miniaturized](isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize:](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize:](miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize:](deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](miniwindowimage.md): The custom miniaturized window image of the window.
