> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohardwarecursordescriptor/1505743-minorversion](https://developer.apple.com/documentation/iokit/iohardwarecursordescriptor/1505743-minorversion)

# minorVersion

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set to kHardwareCursorDescriptorMinorVersion.

## Declaration

```objectivec
UInt16 minorVersion;
```

## See Also

### Fields

- [majorVersion](1505436-majorversion.md): Set to kHardwareCursorDescriptorMajorVersion.
- [height](1506025-height.md): Maximum size of the cursor.
- [width](1505052-width.md): Maximum size of the cursor.
- [bitDepth](1505720-bitdepth.md): Number bits per pixel, or a QD/QT pixel type, for example kIO8IndexedPixelFormat, kIO32ARGBPixelFormat.
- [maskBitDepth](1505546-maskbitdepth.md): Unused.
- [numColors](1505035-numcolors.md): Number of colors for indexed pixel types.
- [colorEncodings](1505587-colorencodings.md): An array pointer specifying the pixel values corresponding to the indices into the color table, for indexed pixel types.
- [flags](1505608-flags.md): None defined, set to zero.
- [supportedSpecialEncodings](1506135-supportedspecialencodings.md): Mask of supported special pixel values, eg. kTransparentEncodedPixel, kInvertingEncodedPixel.
- [specialEncodings](1505679-specialencodings.md): Array of pixel values for each supported special encoding.
