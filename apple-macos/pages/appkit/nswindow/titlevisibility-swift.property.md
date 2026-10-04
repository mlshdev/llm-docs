> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/titlevisibility-swift.property

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

> **Note**

>  When you present a window as a sheet, the window never displays a title, regardless of this property or the window’s [title](title.md) string. The [titled](stylemask-swift.struct/titled.md) style mask flag still affects other behavior, such as the default value of [canBecomeKey](canbecomekey.md), even though it doesn’t cause a sheet to display a title.

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

> **Note**

>  When you present a window as a sheet, the window never displays a title, regardless of this property or the window’s [title](title.md) string. The [NSWindowStyleMaskTitled](stylemask-swift.struct/titled.md) style mask flag still affects other behavior, such as the default value of [canBecomeKeyWindow](canbecomekey.md), even though it doesn’t cause a sheet to display a title.

## See Also

### Managing Titles

- [title](title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](subtitle.md): A secondary line of text that appears in the title bar of the window.
- [setTitleWithRepresentedFilename:](settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](representedurl.md): The URL of the file the window represents.
