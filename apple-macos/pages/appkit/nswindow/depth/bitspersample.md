> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth/bitspersample](https://developer.apple.com/documentation/appkit/nswindow/depth/bitspersample)

# bitsPerSample (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the bits per sample for the specified window depth.

## Declaration

```swift
var bitsPerSample: Int { get }
```

<a id="Discussion"></a>

## Discussion

Returns the number of bits per sample (bits per pixel in each color component) for the window depth specified by `depth`.

## See Also

### Working with Window Depths

- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [colorSpaceName](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [numberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [isPlanar](isplanar.md): Returns whether the specified window depth is planar.
- [canRepresent(\_:)](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

# NSBitsPerSampleFromDepth (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns the bits per sample for the specified window depth.

## Declaration

```objectivec
extern NSInteger NSBitsPerSampleFromDepth(NSWindowDepth depth);
```

<a id="Discussion"></a>

## Discussion

Returns the number of bits per sample (bits per pixel in each color component) for the window depth specified by `depth`.

## See Also

### Working with Window Depths

- [NSAvailableWindowDepths](../../nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](../../nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSColorSpaceFromDepth](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [NSPlanarFromDepth](isplanar.md): Returns whether the specified window depth is planar.
- [canRepresentDisplayGamut:](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.
