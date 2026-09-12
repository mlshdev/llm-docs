> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/seticon(_:forfile:options:)](https://developer.apple.com/documentation/appkit/nsworkspace/seticon(_:forfile:options:))

# setIcon(\_:forFile:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the icon for the file or directory at the specified path.

## Declaration

```swift
func setIcon(_ image: NSImage?, forFile fullPath: String, options: NSWorkspace.IconCreationOptions = []) -> Bool
```

## Parameters

- `image`: The image to use as the icon for the file or directory.
- `fullPath`: The full path of the file or directory.
- `options`: The icon representations to generate from the image. You specify this value by combining the appropriate [NSWorkspace.IconCreationOptions](iconcreationoptions.md) constants, using the C bitwise `OR` operator. Specify `0` if you want to generate icons in all available icon representation formats.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the icon was set; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `image` can be an arbitrary image, with or without transparency. The method automatically scales this image (as needed) to generate the icon representations. The file or folder must exist and be writable by the user.

This method uses the image to set an icon with a size of 512 pixels by 512 pixels. If you specify the [exclude10_4ElementsIconCreationOption](iconcreationoptions/exclude10_4elementsiconcreationoption.md) option (not recommended), this method creates an icon that is compatible with the Finder from macOS 10.2 or earlier.

You can safely call this method from any of your app’s threads, but you must call it from only one thread at a time.

## See Also

### Managing Icons

- [icon(forFile:)](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [icon(forFiles:)](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [icon(for:)](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [NSWorkspace.IconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.

# setIcon:forFile:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the icon for the file or directory at the specified path.

## Declaration

```objectivec
- (BOOL) setIcon:(NSImage *) image forFile:(NSString *) fullPath options:(NSWorkspaceIconCreationOptions) options;
```

## Parameters

- `image`: The image to use as the icon for the file or directory.
- `fullPath`: The full path of the file or directory.
- `options`: The icon representations to generate from the image. You specify this value by combining the appropriate [NSWorkspaceIconCreationOptions](iconcreationoptions.md) constants, using the C bitwise `OR` operator. Specify `0` if you want to generate icons in all available icon representation formats.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the icon was set; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `image` can be an arbitrary image, with or without transparency. The method automatically scales this image (as needed) to generate the icon representations. The file or folder must exist and be writable by the user.

This method uses the image to set an icon with a size of 512 pixels by 512 pixels. If you specify the [NSExclude10_4ElementsIconCreationOption](iconcreationoptions/exclude10_4elementsiconcreationoption.md) option (not recommended), this method creates an icon that is compatible with the Finder from macOS 10.2 or earlier.

You can safely call this method from any of your app’s threads, but you must call it from only one thread at a time.

## See Also

### Managing Icons

- [iconForFile:](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [iconForFiles:](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [iconForContentType:](icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [NSWorkspaceIconCreationOptions](iconcreationoptions.md): Constants that describe options for creating icons.
