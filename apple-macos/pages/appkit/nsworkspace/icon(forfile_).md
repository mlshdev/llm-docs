> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/icon(forfile:)](https://developer.apple.com/documentation/appkit/nsworkspace/icon(forfile:))

# icon(forFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an image containing the icon for the specified file.

## Declaration

```swift
func icon(forFile fullPath: String) -> NSImage
```

## Parameters

- `fullPath`: The full path to the file.

<a id="return-value"></a>

## Return Value

The icon associated with the file.

<a id="Discussion"></a>

## Discussion

The returned image has an initial size of 32 pixels by 32 pixels.

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [icon(forFileType:)](icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.
- [getInfoForFile(\_:application:type:)](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

### Managing Icons

- [icon(forFiles:)](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [icon(for:)](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon(\_:forFile:options:)](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspace.IconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.

# iconForFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an image containing the icon for the specified file.

## Declaration

```objectivec
- (NSImage *) iconForFile:(NSString *) fullPath;
```

## Parameters

- `fullPath`: The full path to the file.

<a id="return-value"></a>

## Return Value

The icon associated with the file.

<a id="Discussion"></a>

## Discussion

The returned image has an initial size of 32 pixels by 32 pixels.

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [iconForFileType:](icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.
- [getInfoForFile:application:type:](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

### Managing Icons

- [iconForFiles:](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [iconForContentType:](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon:forFile:options:](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspaceIconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.
