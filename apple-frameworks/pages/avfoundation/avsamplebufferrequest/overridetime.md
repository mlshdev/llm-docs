> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/overridetime](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/overridetime)

# overrideTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The deadline for sample data and output PTS for the sample buffer.

## Declaration

```swift
var overrideTime: CMTime { get set }
```

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequest.Direction](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequest.Mode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.

# overrideTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The deadline for sample data and output PTS for the sample buffer.

## Declaration

```objectivec
@property (nonatomic, assign) CMTime overrideTime;
```

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequestDirection](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequestMode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.
