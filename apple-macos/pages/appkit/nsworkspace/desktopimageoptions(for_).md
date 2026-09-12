> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageoptions(for:)](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageoptions(for:))

# desktopImageOptions(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the desktop image options for the given screen.

## Declaration

```swift
func desktopImageOptions(for screen: NSScreen) -> [NSWorkspace.DesktopImageOptionKey : Any]?
```

## Parameters

- `screen`: The screen for which to get the desktop image options.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys found in [NSWorkspace.DesktopImageOptionKey](desktopimageoptionkey.md).

<a id="Discussion"></a>

## Discussion

You must call this method from your app’s main thread.

## See Also

### Managing the Desktop Image

- [desktopImageURL(for:)](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL(\_:for:options:)](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [NSWorkspace.DesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.

# desktopImageOptionsForScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the desktop image options for the given screen.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) desktopImageOptionsForScreen:(NSScreen *) screen;
```

## Parameters

- `screen`: The screen for which to get the desktop image options.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys found in [NSWorkspaceDesktopImageOptionKey](desktopimageoptionkey.md).

<a id="Discussion"></a>

## Discussion

You must call this method from your app’s main thread.

## See Also

### Managing the Desktop Image

- [desktopImageURLForScreen:](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL:forScreen:options:error:](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [NSWorkspaceDesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.
