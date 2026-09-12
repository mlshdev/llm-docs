> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/titlevisibility-swift.property](https://developer.apple.com/documentation/appkit/nswindow/titlevisibility-swift.property)

# titleVisibility (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that indicates the visibility of the window’s title and title bar buttons.

## Declaration

```swift
var titleVisibility: NSWindow.TitleVisibility { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [NSWindow.TitleVisibility.visible](titlevisibility-swift.enum/visible.md).

## See Also

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.

# titleVisibility (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that indicates the visibility of the window’s title and title bar buttons.

## Declaration

```objectivec
@property NSWindowTitleVisibility titleVisibility;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [NSWindowTitleVisible](titlevisibility-swift.enum/visible.md).

## See Also

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.
