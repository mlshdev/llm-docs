> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/setvolume(_:at:)](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/setvolume(_:at:))

# setVolume(\_:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the value of the audio volume starting at the specified time.

## Declaration

```swift
func setVolume(_ volume: Float, at time: CMTime)
```

## Parameters

- `volume`: The volume. The value must be between `0.0` and `1.0`.
- `time`: The start time at which to set the volume.

<a id="Discussion"></a>

## Discussion

This method adds a volume ramp starting at `time`. This volume setting remains in effect until the end of the track unless you set a different volume level to start at a later time.

## See Also

### Setting the volume

- [setVolumeRamp(fromStartVolume:toEndVolume:timeRange:)](setvolumeramp%28fromstartvolume_toendvolume_timerange_%29.md): Sets a volume ramp to apply during a specified time range.

# setVolume:atTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the value of the audio volume starting at the specified time.

## Declaration

```objectivec
- (void) setVolume:(float) volume atTime:(CMTime) time;
```

## Parameters

- `volume`: The volume. The value must be between `0.0` and `1.0`.
- `time`: The start time at which to set the volume.

<a id="Discussion"></a>

## Discussion

This method adds a volume ramp starting at `time`. This volume setting remains in effect until the end of the track unless you set a different volume level to start at a later time.

## See Also

### Setting the volume

- [setVolumeRampFromStartVolume:toEndVolume:timeRange:](setvolumeramp%28fromstartvolume_toendvolume_timerange_%29.md): Sets a volume ramp to apply during a specified time range.
