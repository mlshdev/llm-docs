> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth/bitsperpixel](https://developer.apple.com/documentation/appkit/nswindow/depth/bitsperpixel)

# bitsPerPixel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the bits per pixel for the specified window depth.

## Declaration

```swift
var bitsPerPixel: Int { get }
```

<a id="Discussion"></a>

## Discussion

Returns the number of bits per pixel for the window depth specified by `depth`.

## See Also

### Working with Window Depths

- [bitsPerSample](bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [numberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [isPlanar](isplanar.md): Returns whether the specified window depth is planar.
- [canRepresent(\_:)](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

# NSBitsPerPixelFromDepth (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns the bits per pixel for the specified window depth.

## Declaration

```objectivec
extern NSInteger NSBitsPerPixelFromDepth(NSWindowDepth depth);
```

<a id="Discussion"></a>

## Discussion

Returns the number of bits per pixel for the window depth specified by `depth`.

## See Also

### Working with Window Depths

- [NSAvailableWindowDepths](../../nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](../../nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerSampleFromDepth](bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [NSPlanarFromDepth](isplanar.md): Returns whether the specified window depth is planar.
- [canRepresentDisplayGamut:](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.
