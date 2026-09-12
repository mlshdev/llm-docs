> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/canrepresent(_:)](https://developer.apple.com/documentation/appkit/nswindow/canrepresent(_:))

# canRepresent(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

## Declaration

```swift
func canRepresent(_ displayGamut: NSDisplayGamut) -> Bool
```

## See Also

### Working with Window Depths

- [bitsPerPixel](depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [numberOfColorComponents](../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [isPlanar](depth/isplanar.md): Returns whether the specified window depth is planar.

# canRepresentDisplayGamut: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

## Declaration

```objectivec
- (BOOL) canRepresentDisplayGamut:(NSDisplayGamut) displayGamut;
```

## See Also

### Working with Window Depths

- [NSAvailableWindowDepths](../nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](../nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [NSPlanarFromDepth](depth/isplanar.md): Returns whether the specified window depth is planar.
