> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsavailablewindowdepths](https://developer.apple.com/documentation/appkit/nsavailablewindowdepths)

# NSAvailableWindowDepths

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns the available window depth values.

## Declaration

```objectivec
extern const NSWindowDepth *NSAvailableWindowDepths();
```

<a id="Discussion"></a>

## Discussion

Returns a null-terminated array of [NSWindowDepth](nswindow/depth.md) values that specify which window depths are currently available. Window depth values are converted to specific display properties using the functions [NSBitsPerPixelFromDepth](nswindow/depth/bitsperpixel.md), [NSBitsPerSampleFromDepth](nswindow/depth/bitspersample.md), [NSColorSpaceFromDepth](nswindow/depth/colorspacename.md), and [NSPlanarFromDepth](nswindow/depth/isplanar.md).

## See Also

### Working with Window Depths

- [NSBestDepth](nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](nswindow/depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](nswindow/depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](nswindow/depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [NSPlanarFromDepth](nswindow/depth/isplanar.md): Returns whether the specified window depth is planar.
- [canRepresentDisplayGamut:](nswindow/canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.
