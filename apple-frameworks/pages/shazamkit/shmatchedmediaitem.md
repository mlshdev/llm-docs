> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatchedmediaitem](https://developer.apple.com/documentation/shazamkit/shmatchedmediaitem)

# SHMatchedMediaItem (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the metadata for a matched reference signature.

## Declaration

```swift
class SHMatchedMediaItem
```

<a id="overview"></a>

## Overview

To access properties for custom media items, use subscripting. For more information, see [SHMediaItem](shmediaitem.md).

## Topics

### Reading information about the match

- [matchOffset](shmatchedmediaitem/matchoffset.md): The timecode in the reference recording that matches the start of the query, in seconds.
- [predictedCurrentMatchOffset](shmatchedmediaitem/predictedcurrentmatchoffset.md): The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.
- [frequencySkew](shmatchedmediaitem/frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.

### Instance Properties

- [confidence](shmatchedmediaitem/confidence.md): The level of confidence in the match result.

## Relationships

### Inherits From

- [SHMediaItem](shmediaitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHManagedSession](shmanagedsession.md): An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.

# SHMatchedMediaItem (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the metadata for a matched reference signature.

## Declaration

```objectivec
@interface SHMatchedMediaItem : SHMediaItem
```

<a id="overview"></a>

## Overview

To access properties for custom media items, use subscripting. For more information, see [SHMediaItem](shmediaitem.md).

## Topics

### Reading information about the match

- [matchOffset](shmatchedmediaitem/matchoffset.md): The timecode in the reference recording that matches the start of the query, in seconds.
- [predictedCurrentMatchOffset](shmatchedmediaitem/predictedcurrentmatchoffset.md): The updated timecode in the reference recording that matches the current playback position of the query audio, in seconds.
- [frequencySkew](shmatchedmediaitem/frequencyskew.md): A multiple for the difference in frequency between the matched audio and the query audio.

### Instance Properties

- [confidence](shmatchedmediaitem/confidence.md): The level of confidence in the match result.

## Relationships

### Inherits From

- [SHMediaItem](shmediaitem.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.
