> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/isplayable](https://developer.apple.com/documentation/avfoundation/avassettrack/isplayable)

# isPlayable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 16.0) · iPadOS 5.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

A Boolean value that indicates whether the track is playable in the current environment.

> Load the value of [isPlayable](../avpartialasyncproperty/isplayable-6txa5.md) asynchronously instead.

## Declaration

```swift
var isPlayable: Bool { get }
```

# playable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the track is playable in the current environment.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlayable) BOOL playable;
```

## See Also

### Accessing track information

- [formatDescriptions](formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [decodable](isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
