> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicauthorization](https://developer.apple.com/documentation/musickit/musicauthorization)

# MusicAuthorization

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that allows you to request the user’s informed consent for your app to access their music data.

## Declaration

```swift
struct MusicAuthorization
```

## Topics

### Type Properties

- [currentStatus](musicauthorization/currentstatus.md): The authorization status the user sets for accessing MusicKit.

### Type Methods

- [request()](musicauthorization/request%28%29.md): Asks the user for permission for the current app to access MusicKit.

### Enumerations

- [MusicAuthorization.Status](musicauthorization/status.md): A value that indicates the authorization status the user sets for the current app to access their Apple Music data.
