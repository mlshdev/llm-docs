> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspacename/numberofcolorcomponents](https://developer.apple.com/documentation/appkit/nscolorspacename/numberofcolorcomponents)

# numberOfColorComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the number of color components in the specified color space.

## Declaration

```swift
var numberOfColorComponents: Int { get }
```

<a id="Discussion"></a>

## Discussion

Returns the number of color components in the color space whose name is provided by `colorSpaceName`.

## See Also

### Working with Window Depths

- [bitsPerPixel](../nswindow/depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](../nswindow/depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](../nswindow/depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [isPlanar](../nswindow/depth/isplanar.md): Returns whether the specified window depth is planar.
- [canRepresent(\_:)](../nswindow/canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

# NSNumberOfColorComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns the number of color components in the specified color space.

## Declaration

```objectivec
extern NSInteger NSNumberOfColorComponents(NSColorSpaceName colorSpaceName);
```

<a id="Discussion"></a>

## Discussion

Returns the number of color components in the color space whose name is provided by `colorSpaceName`.

## See Also

### Working with Window Depths

- [NSAvailableWindowDepths](../nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](../nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](../nswindow/depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](../nswindow/depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](../nswindow/depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSPlanarFromDepth](../nswindow/depth/isplanar.md): Returns whether the specified window depth is planar.
- [canRepresentDisplayGamut:](../nswindow/canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.
