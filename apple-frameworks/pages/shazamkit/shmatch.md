> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatch](https://developer.apple.com/documentation/shazamkit/shmatch)

# SHMatch (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the catalog media items that match a query.

## Declaration

```swift
class SHMatch
```

<a id="overview"></a>

## Overview

A single query signature may match more than one reference signature. In addition, one reference signature may map to many media items.

## Topics

### Reading match information

- [mediaItems](shmatch/mediaitems.md): An array of the media items in the catalog that match the query signature, in order of the quality of the match.
- [querySignature](shmatch/querysignature.md): The query signature for the match.

### Initializers

- [init(coder:)](shmatch/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHManagedSession](shmanagedsession.md): An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.

# SHMatch (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the catalog media items that match a query.

## Declaration

```objectivec
@interface SHMatch : NSObject
```

<a id="overview"></a>

## Overview

A single query signature may match more than one reference signature. In addition, one reference signature may map to many media items.

## Topics

### Reading match information

- [mediaItems](shmatch/mediaitems.md): An array of the media items in the catalog that match the query signature, in order of the quality of the match.
- [querySignature](shmatch/querysignature.md): The query signature for the match.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.
