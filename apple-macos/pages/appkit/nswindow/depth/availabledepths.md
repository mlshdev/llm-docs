> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth/availabledepths](https://developer.apple.com/documentation/appkit/nswindow/depth/availabledepths)

# availableDepths

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+ · Swift 4.0+

An array that contains all available windows depths.

## Declaration

```swift
static var availableDepths: [NSWindow.Depth] { get }
```

## See Also

### Accessing Depth Details

- [bestDepth(colorSpaceName:bitsPerSample:bitsPerPixel:isPlanar:)](bestdepth%28colorspacename_bitspersample_bitsperpixel_isplanar_%29.md): Determines the best window depth that most closely matches the given properties.
- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [isPlanar](isplanar.md): Returns whether the specified window depth is planar.
