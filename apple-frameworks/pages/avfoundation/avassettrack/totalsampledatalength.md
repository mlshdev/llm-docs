> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/totalsampledatalength](https://developer.apple.com/documentation/avfoundation/avassettrack/totalsampledatalength)

# totalSampleDataLength (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The total number of bytes of sample data the track requires.

> Load the value of [totalSampleDataLength](../avpartialasyncproperty/totalsampledatalength.md) asynchronously instead.

## Declaration

```swift
var totalSampleDataLength: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

The value may be `0` if the framework can’t determine the total sample data length.

# totalSampleDataLength (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The total number of bytes of sample data the track requires.

## Declaration

```objectivec
@property (nonatomic, readonly) long long totalSampleDataLength;
```

<a id="Discussion"></a>

## Discussion

The value may be `0` if the framework can’t determine the total sample data length.

## See Also

### Accessing track information

- [formatDescriptions](formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [decodable](isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
