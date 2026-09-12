> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/destinationrect](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/destinationrect)

# destinationRect (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A rectangle that specifies a destination into which to write the output.

## Declaration

```swift
var destinationRect: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t specify a destination rectangle, the system uses the full dimensions of the output surface.

> **Note**

>  The system doesn’t reference this value when capturing a single window because it draws the window into the output’s full bounds.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.

# destinationRect (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A rectangle that specifies a destination into which to write the output.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect destinationRect;
```

<a id="discussion"></a>

## Discussion

If you don’t specify a destination rectangle, the system uses the full dimensions of the output surface.

> **Note**

>  The system doesn’t reference this value when capturing a single window because it draws the window into the output’s full bounds.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.
