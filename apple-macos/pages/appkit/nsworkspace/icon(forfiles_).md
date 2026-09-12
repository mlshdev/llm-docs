> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/icon(forfiles:)](https://developer.apple.com/documentation/appkit/nsworkspace/icon(forfiles:))

# icon(forFiles:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an image containing the icon for the specified files.

## Declaration

```swift
func icon(forFiles fullPaths: [String]) -> NSImage?
```

## Parameters

- `fullPaths`: An array of `NSString` objects, each of which contains the full path to a file.

<a id="return-value"></a>

## Return Value

The icon associated with the group of files.

<a id="Discussion"></a>

## Discussion

If `fullPaths` specifies one file, that file’s icon is returned. If `fullPaths` specifies more than one file, an icon representing the multiple selection is returned.

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [icon(forFileType:)](icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.

### Managing Icons

- [icon(forFile:)](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [icon(for:)](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon(\_:forFile:options:)](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspace.IconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.

# iconForFiles: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an image containing the icon for the specified files.

## Declaration

```objectivec
- (NSImage *) iconForFiles:(NSArray<NSString *> *) fullPaths;
```

## Parameters

- `fullPaths`: An array of `NSString` objects, each of which contains the full path to a file.

<a id="return-value"></a>

## Return Value

The icon associated with the group of files.

<a id="Discussion"></a>

## Discussion

If `fullPaths` specifies one file, that file’s icon is returned. If `fullPaths` specifies more than one file, an icon representing the multiple selection is returned.

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [iconForFileType:](icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.

### Managing Icons

- [iconForFile:](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [iconForContentType:](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon:forFile:options:](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspaceIconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.
