> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/scalestofit](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/scalestofit)

# scalesToFit (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A Boolean value that indicates whether to scale the output to fit the configured width and height.

## Declaration

```swift
var scalesToFit: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The system uses this value during independent window capture.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.

# scalesToFit (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A Boolean value that indicates whether to scale the output to fit the configured width and height.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL scalesToFit;
```

<a id="discussion"></a>

## Discussion

The system uses this value during independent window capture.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.
