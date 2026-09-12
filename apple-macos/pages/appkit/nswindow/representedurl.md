> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/representedurl](https://developer.apple.com/documentation/appkit/nswindow/representedurl)

# representedURL (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The URL of the file the window represents.

## Declaration

```swift
var representedURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

When the URL specifies a path, the window shows an icon in its title bar, as described in the following table:

| File path | Document icon |
| --- | --- |
| Empty | None |
| Specifies a nonexistent file | Generic |
| Specifies an existent file | Specific for the file’s type |

You can customize the file icon in the title bar with the following code:

```objc
[[<window> standardWindowButton:NSWindowDocumentIconButton] setImage:<image>]
```

When the URL identifies an existing file, the window’s title offers a pop-up menu showing the path components of the URL. (The user displays this menu by Command-clicking the title.) The behavior and contents of this menu can be controlled with [window(\_:shouldPopUpDocumentPathMenu:)](../nswindowdelegate/window%28__shouldpopupdocumentpathmenu_%29.md).

## See Also

### Related Documentation

- [window(\_:shouldDragDocumentWith:from:with:)](../nswindowdelegate/window%28__shoulddragdocumentwith_from_with_%29.md): Asks the delegate whether a user can drag the document icon from the window’s title bar.

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename(\_:)](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.

# representedURL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The URL of the file the window represents.

## Declaration

```objectivec
@property (copy, nullable) NSURL * representedURL;
```

<a id="Discussion"></a>

## Discussion

When the URL specifies a path, the window shows an icon in its title bar, as described in the following table:

| File path | Document icon |
| --- | --- |
| Empty | None |
| Specifies a nonexistent file | Generic |
| Specifies an existent file | Specific for the file’s type |

You can customize the file icon in the title bar with the following code:

```objc
[[<window> standardWindowButton:NSWindowDocumentIconButton] setImage:<image>]
```

When the URL identifies an existing file, the window’s title offers a pop-up menu showing the path components of the URL. (The user displays this menu by Command-clicking the title.) The behavior and contents of this menu can be controlled with [window:shouldPopUpDocumentPathMenu:](../nswindowdelegate/window%28__shouldpopupdocumentpathmenu_%29.md).

## See Also

### Related Documentation

- [window:shouldDragDocumentWithEvent:from:withPasteboard:](../nswindowdelegate/window%28__shoulddragdocumentwith_from_with_%29.md): Asks the delegate whether a user can drag the document icon from the window’s title bar.

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
