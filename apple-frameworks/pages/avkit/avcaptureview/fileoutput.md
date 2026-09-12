> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview/fileoutput](https://developer.apple.com/documentation/avkit/avcaptureview/fileoutput)

# fileOutput (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The capture file output used to record media data.

## Declaration

```swift
var fileOutput: AVCaptureFileOutput? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the first capture file output object contained in the session’s [outputs](../../avfoundation/avcapturesession/outputs.md) array, or `nil` if it has no outputs. In the latter case, the capture view disables the start recording button. However, it may still enable the controls for choosing input sources.

# fileOutput (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The capture file output used to record media data.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptureFileOutput * fileOutput;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the first capture file output object contained in the session’s [outputs](../../avfoundation/avcapturesession/outputs.md) array, or `nil` if it has no outputs. In the latter case, the capture view disables the start recording button. However, it may still enable the controls for choosing input sources.
