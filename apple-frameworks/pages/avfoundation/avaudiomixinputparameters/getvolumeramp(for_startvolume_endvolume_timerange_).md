> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiomixinputparameters/getvolumeramp(for:startvolume:endvolume:timerange:)](https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/getvolumeramp(for:startvolume:endvolume:timerange:))

# getVolumeRamp(for:startVolume:endVolume:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Retrieves the volume ramp that includes the specified time.

## Declaration

```swift
func getVolumeRamp(for time: CMTime, startVolume: UnsafeMutablePointer<Float>?, endVolume: UnsafeMutablePointer<Float>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startVolume`: A pointer to a float to receive the starting volume value for the volume ramp.

  This value may be `NULL`.
- `endVolume`: A pointer to a float to receive the ending volume value for the volume ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a [CMTimeRange](../../coremedia/cmtimerange.md) to receive the time range of the volume ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values were retrieved successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if `time` is beyond the duration of the last volume ramp that has been set.

<a id="Discussion"></a>

## Discussion

The process of setting up volume ramps requires the configuration of an instance of [AVMutableAudioMixInputParameters](../avmutableaudiomixinputparameters.md).

# getVolumeRampForTime:startVolume:endVolume:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Retrieves the volume ramp that includes the specified time.

## Declaration

```objectivec
- (BOOL) getVolumeRampForTime:(CMTime) time startVolume:(float *) startVolume endVolume:(float *) endVolume timeRange:(CMTimeRange *) timeRange;
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startVolume`: A pointer to a float to receive the starting volume value for the volume ramp.

  This value may be `NULL`.
- `endVolume`: A pointer to a float to receive the ending volume value for the volume ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a [CMTimeRange](../../coremedia/cmtimerange.md) to receive the time range of the volume ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values were retrieved successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if `time` is beyond the duration of the last volume ramp that has been set.

<a id="Discussion"></a>

## Discussion

The process of setting up volume ramps requires the configuration of an instance of [AVMutableAudioMixInputParameters](../avmutableaudiomixinputparameters.md).
