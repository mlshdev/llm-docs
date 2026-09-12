> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/subtitle](https://developer.apple.com/documentation/appkit/nswindow/subtitle)

# subtitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A secondary line of text that appears in the title bar of the window.

## Declaration

```swift
var subtitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is an empty string, the system removes the subtitle from the window layout.

## See Also

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.

# subtitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A secondary line of text that appears in the title bar of the window.

## Declaration

```objectivec
@property (copy) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

When this property is an empty string, the system removes the subtitle from the window layout.

## See Also

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.
