> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/icon(for:)](https://developer.apple.com/documentation/appkit/nsworkspace/icon(for:))

# icon(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns an image containing the icon for the specified content type.

## Declaration

```swift
func icon(for contentType: UTType) -> NSImage
```

## Parameters

- `contentType`: An object representing a uniform type of content.

<a id="return-value"></a>

## Return Value

The icon associated with the content type.

<a id="Discussion"></a>

## Discussion

This method returns a default icon if the operation fails.

## See Also

### Managing Icons

- [icon(forFile:)](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [icon(forFiles:)](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [setIcon(\_:forFile:options:)](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspace.IconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.

# iconForContentType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns an image containing the icon for the specified content type.

## Declaration

```objectivec
- (NSImage *) iconForContentType:(UTType *) contentType;
```

## Parameters

- `contentType`: An object representing a uniform type of content.

<a id="return-value"></a>

## Return Value

The icon associated with the content type.

<a id="Discussion"></a>

## Discussion

This method returns a default icon if the operation fails.

## See Also

### Managing Icons

- [iconForFile:](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [iconForFiles:](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [setIcon:forFile:options:](seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspaceIconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.
