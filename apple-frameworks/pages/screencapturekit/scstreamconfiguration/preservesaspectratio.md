> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/preservesaspectratio](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/preservesaspectratio)

# preservesAspectRatio (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that determines if the stream preserves aspect ratio.

## Declaration

```swift
var preservesAspectRatio: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.

# preservesAspectRatio (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A Boolean value that determines if the stream preserves aspect ratio.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL preservesAspectRatio;
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Specifying dimensions

- [width](width.md): The width of the output.
- [height](height.md): The height of the output.
- [scalesToFit](scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](destinationrect.md): A rectangle that specifies a destination into which to write the output.
