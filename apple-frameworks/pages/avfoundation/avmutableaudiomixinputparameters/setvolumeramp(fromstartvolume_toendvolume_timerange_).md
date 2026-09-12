> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/setvolumeramp(fromstartvolume:toendvolume:timerange:)](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/setvolumeramp(fromstartvolume:toendvolume:timerange:))

# setVolumeRamp(fromStartVolume:toEndVolume:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets a volume ramp to apply during a specified time range.

## Declaration

```swift
func setVolumeRamp(fromStartVolume startVolume: Float, toEndVolume endVolume: Float, timeRange: CMTimeRange)
```

## Parameters

- `startVolume`: The starting volume. The value must be between `0.0` and 1.0.
- `endVolume`: The end volume. The value must be between `0.0` and `1.0`.
- `timeRange`: The time range over which to apply the ramp.

## See Also

### Setting the volume

- [setVolume(\_:at:)](setvolume%28__at_%29.md): Sets the value of the audio volume starting at the specified time.

# setVolumeRampFromStartVolume:toEndVolume:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets a volume ramp to apply during a specified time range.

## Declaration

```objectivec
- (void) setVolumeRampFromStartVolume:(float) startVolume toEndVolume:(float) endVolume timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `startVolume`: The starting volume. The value must be between `0.0` and 1.0.
- `endVolume`: The end volume. The value must be between `0.0` and `1.0`.
- `timeRange`: The time range over which to apply the ramp.

## See Also

### Setting the volume

- [setVolume:atTime:](setvolume%28__at_%29.md): Sets the value of the audio volume starting at the specified time.
