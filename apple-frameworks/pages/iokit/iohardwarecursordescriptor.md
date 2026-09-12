> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohardwarecursordescriptor](https://developer.apple.com/documentation/iokit/iohardwarecursordescriptor)

# IOHardwareCursorDescriptor

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOHardwareCursorDescriptor {
    ...
} IOHardwareCursorDescriptor;
```

## Topics

### Instance Properties

- [bitDepth](iohardwarecursordescriptor/1505720-bitdepth.md): Number bits per pixel, or a QD/QT pixel type, for example kIO8IndexedPixelFormat, kIO32ARGBPixelFormat.
- [colorEncodings](iohardwarecursordescriptor/1505587-colorencodings.md): An array pointer specifying the pixel values corresponding to the indices into the color table, for indexed pixel types.
- [flags](iohardwarecursordescriptor/1505608-flags.md): None defined, set to zero.
- [height](iohardwarecursordescriptor/1506025-height.md): Maximum size of the cursor.
- [majorVersion](iohardwarecursordescriptor/1505436-majorversion.md): Set to kHardwareCursorDescriptorMajorVersion.
- [maskBitDepth](iohardwarecursordescriptor/1505546-maskbitdepth.md): Unused.
- [minorVersion](iohardwarecursordescriptor/1505743-minorversion.md): Set to kHardwareCursorDescriptorMinorVersion.
- [numColors](iohardwarecursordescriptor/1505035-numcolors.md): Number of colors for indexed pixel types.
- [specialEncodings](iohardwarecursordescriptor/1505679-specialencodings.md): Array of pixel values for each supported special encoding.
- [supportedSpecialEncodings](iohardwarecursordescriptor/1506135-supportedspecialencodings.md): Mask of supported special pixel values, eg. kTransparentEncodedPixel, kInvertingEncodedPixel.
- [width](iohardwarecursordescriptor/1505052-width.md): Maximum size of the cursor.
