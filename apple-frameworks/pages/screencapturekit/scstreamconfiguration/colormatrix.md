> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/colormatrix](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/colormatrix)

# colorMatrix (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A color matrix to apply to the output surface.

## Declaration

```swift
unowned(unsafe) var colorMatrix: CFString { get set }
```

<a id="discussion"></a>

## Discussion

You can specify a value for this property if your pixel format is `420v` or `420f`. The value must be one of the strings specified in [Display Stream YCbCr to RGB conversion Matrix Options](../../coregraphics/display-stream-ycbcr-to-rgb-conversion-matrix-options.md).

## See Also

### Configuring colors

- [pixelFormat](pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorSpaceName](colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](backgroundcolor.md): A background color for the output.

# colorMatrix (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A color matrix to apply to the output surface.

## Declaration

```objectivec
@property (nonatomic, assign) CFStringRef colorMatrix;
```

<a id="discussion"></a>

## Discussion

You can specify a value for this property if your pixel format is `420v` or `420f`. The value must be one of the strings specified in [Display Stream YCbCr to RGB conversion Matrix Options](../../coregraphics/display-stream-ycbcr-to-rgb-conversion-matrix-options.md).

## See Also

### Configuring colors

- [pixelFormat](pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorSpaceName](colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](backgroundcolor.md): A background color for the output.
