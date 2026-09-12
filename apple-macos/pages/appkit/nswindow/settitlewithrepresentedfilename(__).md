> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/settitlewithrepresentedfilename(_:)](https://developer.apple.com/documentation/appkit/nswindow/settitlewithrepresentedfilename(_:))

# setTitleWithRepresentedFilename(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.

## Declaration

```swift
func setTitleWithRepresentedFilename(_ filename: String)
```

## Parameters

- `filename`: The file path to set as the window’s title.

<a id="Discussion"></a>

## Discussion

The windows’ title bar displays the filename, not the file’s path.

## See Also

### Related Documentation

- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.

# setTitleWithRepresentedFilename: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.

## Declaration

```objectivec
- (void) setTitleWithRepresentedFilename:(NSString *) filename;
```

## Parameters

- `filename`: The file path to set as the window’s title.

<a id="Discussion"></a>

## Discussion

The windows’ title bar displays the filename, not the file’s path.

## See Also

### Related Documentation

- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.
