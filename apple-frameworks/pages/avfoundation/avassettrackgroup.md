> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackgroup](https://developer.apple.com/documentation/avfoundation/avassettrackgroup)

# AVAssetTrackGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A group of related tracks in an asset.

## Declaration

```swift
class AVAssetTrackGroup
```

<a id="overview"></a>

## Overview

A track group describes a group of related alternative tracks, only one of which should play at a time. Groups of alternative tracks typically contain variations of the same content, like subtitles in multiple translations.

You can inspect an asset’s track groups by loading the value of its [trackGroups](avpartialasyncproperty/trackgroups.md) property.

## Topics

### Getting track ID values

- [trackIDs](avassettrackgroup/trackids.md): The IDs of the tracks in the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.

# AVAssetTrackGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A group of related tracks in an asset.

## Declaration

```objectivec
@interface AVAssetTrackGroup : NSObject
```

<a id="overview"></a>

## Overview

A track group describes a group of related alternative tracks, only one of which should play at a time. Groups of alternative tracks typically contain variations of the same content, like subtitles in multiple translations.

You can inspect an asset’s track groups by loading the value of its [trackGroups](avpartialasyncproperty/trackgroups.md) property.

## Topics

### Getting track ID values

- [trackIDs](avassettrackgroup/trackids.md): The IDs of the tracks in the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
