> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth/isplanar](https://developer.apple.com/documentation/appkit/nswindow/depth/isplanar)

# isPlanar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the specified window depth is planar.

## Declaration

```swift
var isPlanar: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified window `depth` is planar and [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Working with Window Depths

- [bitsPerPixel](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [numberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [canRepresent(\_:)](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

# NSPlanarFromDepth (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns whether the specified window depth is planar.

## Declaration

```objectivec
extern BOOL NSPlanarFromDepth(NSWindowDepth depth);
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified window `depth` is planar and [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Working with Window Depths

- [NSAvailableWindowDepths](../../nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](../../nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](../../nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [canRepresentDisplayGamut:](../canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.
