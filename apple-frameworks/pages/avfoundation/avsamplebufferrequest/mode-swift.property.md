> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/mode-swift.property](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/mode-swift.property)

# mode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The sample buffer request mode.

## Declaration

```swift
var mode: AVSampleBufferRequest.Mode { get set }
```

<a id="Discussion"></a>

## Discussion

Default is [AVSampleBufferRequest.Mode.immediate](mode-swift.enum/immediate.md).

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequest.Direction](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [AVSampleBufferRequest.Mode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.

# mode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The sample buffer request mode.

## Declaration

```objectivec
@property (nonatomic, assign) AVSampleBufferRequestMode mode;
```

<a id="Discussion"></a>

## Discussion

Default is [AVSampleBufferRequestModeImmediate](mode-swift.enum/immediate.md).

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequestDirection](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [AVSampleBufferRequestMode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.
