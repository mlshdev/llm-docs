> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackgroupoutputhandling](https://developer.apple.com/documentation/avfoundation/avassettrackgroupoutputhandling)

# AVAssetTrackGroupOutputHandling (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A type that specifies policies for how an export session processes alternate tracks in a track group.

## Declaration

```swift
struct AVAssetTrackGroupOutputHandling
```

## Topics

### Policies

- [preserveAlternateTracks](avassettrackgroupoutputhandling/preservealternatetracks.md): A policy that passes through alternate audio tracks from the source asset during export.

### Initializers

- [init(rawValue:)](avassettrackgroupoutputhandling/init%28rawvalue_%29.md): Creates track group output handling structure with a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring track groups

- [audioTrackGroupHandling](avassetexportsession/audiotrackgrouphandling.md): A policy that defines how the session exports alternate audio tracks.

# AVAssetTrackGroupOutputHandling (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A type that specifies policies for how an export session processes alternate tracks in a track group.

## Declaration

```objectivec
enum AVAssetTrackGroupOutputHandling : NSUInteger;
```

## Topics

### Policies

- [AVAssetTrackGroupOutputHandlingNone](avassettrackgroupoutputhandling/avassettrackgroupoutputhandlingnone.md): A policy that doesn’t pass through alternate audio tracks from the source asset during export.
- [AVAssetTrackGroupOutputHandlingPreserveAlternateTracks](avassettrackgroupoutputhandling/preservealternatetracks.md): A policy that passes through alternate audio tracks from the source asset during export.
- [AVAssetTrackGroupOutputHandlingDefaultPolicy](avassettrackgroupoutputhandling/avassettrackgroupoutputhandlingdefaultpolicy.md): The default track group output handling policy.

## See Also

### Configuring track groups

- [audioTrackGroupHandling](avassetexportsession/audiotrackgrouphandling.md): A policy that defines how the session exports alternate audio tracks.
