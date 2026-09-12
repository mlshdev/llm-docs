> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/isselfcontained](https://developer.apple.com/documentation/avfoundation/avassettrack/isselfcontained)

# isSelfContained (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

A Boolean value that indicates whether this track references sample data only within its container file.

> Load the value of [isSelfContained](../avpartialasyncproperty/isselfcontained.md) asynchronously instead.

## Declaration

```swift
var isSelfContained: Bool { get }
```

# selfContained (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether this track references sample data only within its container file.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSelfContained) BOOL selfContained;
```

## See Also

### Accessing track information

- [formatDescriptions](formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [decodable](isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [totalSampleDataLength](totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
