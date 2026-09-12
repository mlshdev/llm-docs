> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/isdecodable](https://developer.apple.com/documentation/avfoundation/avassettrack/isdecodable)

# isDecodable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.13+ (deprecated in 13.0) · tvOS 11.0+ (deprecated in 16.0) · watchOS 4.0+ (deprecated in 9.0)

A Boolean value that indicates whether the track is decodable in the current environment.

> Load the value of [isDecodable](../avpartialasyncproperty/isdecodable.md) asynchronously instead.

## Declaration

```swift
var isDecodable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the system can decode the track, even if decoding may be too slow for real-time playback.

# decodable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the track is decodable in the current environment.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDecodable) BOOL decodable;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the system can decode the track, even if decoding may be too slow for real-time playback.

## See Also

### Accessing track information

- [formatDescriptions](formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
