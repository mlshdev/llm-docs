> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsessiondelegate](https://developer.apple.com/documentation/shazamkit/shsessiondelegate)

# SHSessionDelegate (Swift)

**Framework:** ShazamKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Methods that the session calls with the result of a match request.

## Declaration

```swift
protocol SHSessionDelegate : NSObjectProtocol
```

## Topics

### Handling matches

- [session(\_:didFind:)](shsessiondelegate/session%28__didfind_%29.md): Tells the delegate that the query signature matches an item in the catalog.
- [session(\_:didNotFindMatchFor:error:)](shsessiondelegate/session%28__didnotfindmatchfor_error_%29.md): Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHManagedSession](shmanagedsession.md): An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.

# SHSessionDelegate (Objective-C)

**Framework:** ShazamKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Methods that the session calls with the result of a match request.

## Declaration

```objectivec
@protocol SHSessionDelegate <NSObject>
```

## Topics

### Handling matches

- [session:didFindMatch:](shsessiondelegate/session%28__didfind_%29.md): Tells the delegate that the query signature matches an item in the catalog.
- [session:didNotFindMatchForSignature:error:](shsessiondelegate/session%28__didnotfindmatchfor_error_%29.md): Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.
