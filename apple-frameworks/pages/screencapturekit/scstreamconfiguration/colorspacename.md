> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/colorspacename](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/colorspacename)

# colorSpaceName (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A color space to use for the output buffer.

## Declaration

```swift
unowned(unsafe) var colorSpaceName: CFString { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t specify a value, the output buffer uses the same color space as the display. If you specify a value, if must be one of the strings specified in [CGColorSpace](../../coregraphics/cgcolorspace.md).

## See Also

### Configuring colors

- [pixelFormat](pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorMatrix](colormatrix.md): A color matrix to apply to the output surface.
- [backgroundColor](backgroundcolor.md): A background color for the output.

# colorSpaceName (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A color space to use for the output buffer.

## Declaration

```objectivec
@property (nonatomic, assign) CFStringRef colorSpaceName;
```

<a id="discussion"></a>

## Discussion

If you don’t specify a value, the output buffer uses the same color space as the display. If you specify a value, if must be one of the strings specified in [CGColorSpaceRef](../../coregraphics/cgcolorspace.md).

## See Also

### Configuring colors

- [pixelFormat](pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorMatrix](colormatrix.md): A color matrix to apply to the output surface.
- [backgroundColor](backgroundcolor.md): A background color for the output.
