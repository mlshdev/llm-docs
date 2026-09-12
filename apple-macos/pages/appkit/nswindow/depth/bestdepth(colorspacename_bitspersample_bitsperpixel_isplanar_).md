> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth/bestdepth(colorspacename:bitspersample:bitsperpixel:isplanar:)](https://developer.apple.com/documentation/appkit/nswindow/depth/bestdepth(colorspacename:bitspersample:bitsperpixel:isplanar:))

# bestDepth(colorSpaceName:bitsPerSample:bitsPerPixel:isPlanar:)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Determines the best window depth that most closely matches the given properties.

## Declaration

```swift
static func bestDepth(colorSpaceName: NSColorSpaceName, bitsPerSample: Int, bitsPerPixel: Int, isPlanar: Bool) -> (NSWindow.Depth, isExactMatch: Bool)
```

## Parameters

- `colorSpaceName`: The name of a color space to match.
- `bitsPerSample`: The bits per sample to match.
- `bitsPerPixel`: The bits per pixel to match.
- `isPlanar`: A Boolean that indicates whether the window depth is planar.

<a id="return-value"></a>

## Return Value

The window depth that most closely matches the properties this function requests.

## See Also

### Accessing Depth Details

- [availableDepths](availabledepths.md): An array that contains all available windows depths.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [isPlanar](isplanar.md): Returns whether the specified window depth is planar.
