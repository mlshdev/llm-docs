> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageurl(for:)](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageurl(for:))

# desktopImageURL(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the URL for the desktop image for the given screen.

## Declaration

```swift
func desktopImageURL(for screen: NSScreen) -> URL?
```

## Parameters

- `screen`: The screen for which to get the desktop image.

<a id="return-value"></a>

## Return Value

The desktop image.

<a id="Discussion"></a>

## Discussion

You must call this method from your app’s main thread.

## See Also

### Managing the Desktop Image

- [setDesktopImageURL(\_:for:options:)](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptions(for:)](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspace.DesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.

# desktopImageURLForScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the URL for the desktop image for the given screen.

## Declaration

```objectivec
- (NSURL *) desktopImageURLForScreen:(NSScreen *) screen;
```

## Parameters

- `screen`: The screen for which to get the desktop image.

<a id="return-value"></a>

## Return Value

The desktop image.

<a id="Discussion"></a>

## Discussion

You must call this method from your app’s main thread.

## See Also

### Managing the Desktop Image

- [setDesktopImageURL:forScreen:options:error:](setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptionsForScreen:](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspaceDesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.
