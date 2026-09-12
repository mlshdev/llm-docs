> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/preset](https://developer.apple.com/documentation/avfoundation/avcapturesession/preset)

# AVCaptureSession.Preset (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Presets that define standard configurations for a capture session.

## Declaration

```swift
struct Preset
```

<a id="Discussion"></a>

## Discussion

Setting a [sessionPreset](sessionpreset.md) value provides a convenient way to configure a capture session for common use cases.

## Topics

### Quality levels

- [high](preset/high.md): A preset suitable for capturing high-quality output.
- [medium](preset/medium.md): A preset suitable for capturing medium-quality output.
- [low](preset/low.md): A preset suitable for capturing low-quality output.

### Photo

- [photo](preset/photo.md): A preset suitable for capturing high-resolution photo quality output.

### Manual configuration

- [inputPriority](preset/inputpriority.md): A preset that doesn’t specify audio and video output settings for a capture session.

### High definition

- [qHD960x540](preset/qhd960x540.md): A preset suitable for capturing quarter HD quality (960 x 540 pixel) video output.
- [hd1280x720](preset/hd1280x720.md): A preset suitable for capturing 720p quality (1280 x 720 pixel) video output.
- [hd1920x1080](preset/hd1920x1080.md): A preset suitable for capturing 1080p-quality (1920 x 1080 pixels) video output.
- [hd4K3840x2160](preset/hd4k3840x2160.md): A preset suitable for capturing 2160p-quality (3840 x 2160 pixels) video output.

### VGA

- [qvga320x240](preset/qvga320x240.md): A preset suitable for capturing 320 x 240 pixel video output.
- [vga640x480](preset/vga640x480.md): A preset suitable for capturing VGA quality (640 x 480 pixel) video output.

### iFrame

- [iFrame960x540](preset/iframe960x540.md): A preset suitable for capturing 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio.
- [iFrame1280x720](preset/iframe1280x720.md): A preset suitable for capturing 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio.

### CIF

- [cif352x288](preset/cif352x288.md): A preset suitable for capturing CIF quality (352 x 288 pixel) video output.

### Initializers

- [init(rawValue:)](preset/init%28rawvalue_%29.md): Creates a preset with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a session preset

- [canSetSessionPreset(\_:)](cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.
- [sessionPreset](sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.

# AVCaptureSessionPreset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Presets that define standard configurations for a capture session.

## Declaration

```objectivec
typedef NSString * AVCaptureSessionPreset;
```

<a id="Discussion"></a>

## Discussion

Setting a [sessionPreset](sessionpreset.md) value provides a convenient way to configure a capture session for common use cases.

## Topics

### Quality levels

- [AVCaptureSessionPresetHigh](preset/high.md): A preset suitable for capturing high-quality output.
- [AVCaptureSessionPresetMedium](preset/medium.md): A preset suitable for capturing medium-quality output.
- [AVCaptureSessionPresetLow](preset/low.md): A preset suitable for capturing low-quality output.

### Photo

- [AVCaptureSessionPresetPhoto](preset/photo.md): A preset suitable for capturing high-resolution photo quality output.

### Manual configuration

- [AVCaptureSessionPresetInputPriority](preset/inputpriority.md): A preset that doesn’t specify audio and video output settings for a capture session.

### High definition

- [AVCaptureSessionPreset960x540](preset/qhd960x540.md): A preset suitable for capturing quarter HD quality (960 x 540 pixel) video output.
- [AVCaptureSessionPreset1280x720](preset/hd1280x720.md): A preset suitable for capturing 720p quality (1280 x 720 pixel) video output.
- [AVCaptureSessionPreset1920x1080](preset/hd1920x1080.md): A preset suitable for capturing 1080p-quality (1920 x 1080 pixels) video output.
- [AVCaptureSessionPreset3840x2160](preset/hd4k3840x2160.md): A preset suitable for capturing 2160p-quality (3840 x 2160 pixels) video output.

### VGA

- [AVCaptureSessionPreset320x240](preset/qvga320x240.md): A preset suitable for capturing 320 x 240 pixel video output.
- [AVCaptureSessionPreset640x480](preset/vga640x480.md): A preset suitable for capturing VGA quality (640 x 480 pixel) video output.

### iFrame

- [AVCaptureSessionPresetiFrame960x540](preset/iframe960x540.md): A preset suitable for capturing 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio.
- [AVCaptureSessionPresetiFrame1280x720](preset/iframe1280x720.md): A preset suitable for capturing 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio.

### CIF

- [AVCaptureSessionPreset352x288](preset/cif352x288.md): A preset suitable for capturing CIF quality (352 x 288 pixel) video output.

## See Also

### Setting a session preset

- [canSetSessionPreset:](cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.
- [sessionPreset](sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.
