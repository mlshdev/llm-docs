> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/pixelformat](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/pixelformat)

# pixelFormat (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A pixel format for sample buffers that a stream outputs.

## Declaration

```swift
var pixelFormat: OSType { get set }
```

<a id="discussion"></a>

## Discussion

A stream supports the following pixel formats:

- **`BGRA`**: Packed little endian ARGB8888.
- **`l10r`**: Packed little endian ARGB2101010.
- **`420v`**: Two-plane “video” range YCbCr 4:2:0.
- **`420f`**: Two-plane “full” range YCbCr 4:2:0.

## See Also

### Configuring colors

- [colorMatrix](colormatrix.md): A color matrix to apply to the output surface.
- [colorSpaceName](colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](backgroundcolor.md): A background color for the output.

# pixelFormat (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A pixel format for sample buffers that a stream outputs.

## Declaration

```objectivec
@property (nonatomic, assign) OSType pixelFormat;
```

<a id="discussion"></a>

## Discussion

A stream supports the following pixel formats:

- **`BGRA`**: Packed little endian ARGB8888.
- **`l10r`**: Packed little endian ARGB2101010.
- **`420v`**: Two-plane “video” range YCbCr 4:2:0.
- **`420f`**: Two-plane “full” range YCbCr 4:2:0.

## See Also

### Configuring colors

- [colorMatrix](colormatrix.md): A color matrix to apply to the output surface.
- [colorSpaceName](colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](backgroundcolor.md): A background color for the output.
