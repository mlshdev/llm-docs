> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/cansetsessionpreset(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/cansetsessionpreset(_:))

# canSetSessionPreset(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Determines whether you can configure a capture session with the specified preset.

## Declaration

```swift
func canSetSessionPreset(_ preset: AVCaptureSession.Preset) -> Bool
```

## Parameters

- `preset`: A preset value to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the capture session supports the preset; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether the capture session, in its current I/O configuration, supports a particular preset. You can only set a preset that returns [true](https://developer.apple.com/documentation/swift/true) as the capture session’s [sessionPreset](sessionpreset.md) property value.

## See Also

### Setting a session preset

- [AVCaptureSession.Preset](preset.md): Presets that define standard configurations for a capture session.
- [sessionPreset](sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.

# canSetSessionPreset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Determines whether you can configure a capture session with the specified preset.

## Declaration

```objectivec
- (BOOL) canSetSessionPreset:(AVCaptureSessionPreset) preset;
```

## Parameters

- `preset`: A preset value to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the capture session supports the preset; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether the capture session, in its current I/O configuration, supports a particular preset. You can only set a preset that returns [true](https://developer.apple.com/documentation/swift/true) as the capture session’s [sessionPreset](sessionpreset.md) property value.

## See Also

### Setting a session preset

- [AVCaptureSessionPreset](preset.md): Presets that define standard configurations for a capture session.
- [sessionPreset](sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.
