> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/title](https://developer.apple.com/documentation/appkit/nswindow/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The string that appears in the title bar of the window or the path to the represented file.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

If the title has been set using [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md), this property contains the file’s path. Setting this property also sets the title of the window’s miniaturized window.

## See Also

### Related Documentation

- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

### Managing Titles

- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The string that appears in the title bar of the window or the path to the represented file.

## Declaration

```objectivec
@property (copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

If the title has been set using [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md), this property contains the file’s path. Setting this property also sets the title of the window’s miniaturized window.

## See Also

### Related Documentation

- [miniwindowTitle](miniwindowtitle.md): The title displayed in the window’s minimized window.

### Managing Titles

- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.
