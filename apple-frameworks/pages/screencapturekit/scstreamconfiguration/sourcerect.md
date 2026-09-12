> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/sourcerect](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/sourcerect)

# sourceRect (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A rectangle that specifies the source area to capture.

## Declaration

```swift
var sourceRect: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t specify a source rectangle to capture, the system captures the entire display.

> **Note**

>  The system doesn’t reference this value when you capture a single window because it captures the full bounds of the window.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.

# sourceRect (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A rectangle that specifies the source area to capture.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect sourceRect;
```

<a id="discussion"></a>

## Discussion

If you don’t specify a source rectangle to capture, the system captures the entire display.

> **Note**

>  The system doesn’t reference this value when you capture a single window because it captures the full bounds of the window.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.
