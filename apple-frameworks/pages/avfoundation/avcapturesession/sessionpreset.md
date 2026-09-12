> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/sessionpreset](https://developer.apple.com/documentation/avfoundation/avcapturesession/sessionpreset)

# sessionPreset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A preset value that indicates the quality level or bit rate of the output.

## Declaration

```swift
var sessionPreset: AVCaptureSession.Preset { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a preset value to configure a capture session’s format and settings. The default preset is [high](preset/high.md), which produces high-quality video and audio output, but you can specify any preset value that returns [true](https://developer.apple.com/documentation/swift/true) for a call to [canSetSessionPreset(\_:)](cansetsessionpreset%28__%29.md).

You can set this value while the session is running.

## See Also

### Setting a session preset

- [AVCaptureSession.Preset](preset.md): Presets that define standard configurations for a capture session.
- [canSetSessionPreset(\_:)](cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.

# sessionPreset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A preset value that indicates the quality level or bit rate of the output.

## Declaration

```objectivec
@property (nonatomic, copy) AVCaptureSessionPreset sessionPreset;
```

<a id="Discussion"></a>

## Discussion

Specify a preset value to configure a capture session’s format and settings. The default preset is [AVCaptureSessionPresetHigh](preset/high.md), which produces high-quality video and audio output, but you can specify any preset value that returns [true](https://developer.apple.com/documentation/swift/true) for a call to [canSetSessionPreset:](cansetsessionpreset%28__%29.md).

You can set this value while the session is running.

## See Also

### Setting a session preset

- [AVCaptureSessionPreset](preset.md): Presets that define standard configurations for a capture session.
- [canSetSessionPreset:](cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.
