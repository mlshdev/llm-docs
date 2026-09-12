> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/hasmediacharacteristic(_:)](https://developer.apple.com/documentation/avfoundation/avassettrack/hasmediacharacteristic(_:))

# hasMediaCharacteristic(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

> Load the value of [mediaCharacteristics](../avpartialasyncproperty/mediacharacteristics.md) asynchronously instead.

## Declaration

```swift
func hasMediaCharacteristic(_ mediaCharacteristic: AVMediaCharacteristic) -> Bool
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the track references media with the specified characteristic, otherwise [false](https://developer.apple.com/documentation/swift/false).

# hasMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

## Declaration

```objectivec
- (BOOL) hasMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the track references media with the specified characteristic, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing track information

- [formatDescriptions](formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [decodable](isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
