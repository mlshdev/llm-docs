> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmanagedsession](https://developer.apple.com/documentation/shazamkit/shmanagedsession)

# SHManagedSession

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.

## Declaration

```swift
final class SHManagedSession
```

<a id="overview"></a>

## Overview

This session is an alternative for [SHSession](shsession.md) if you prefer ShazamKit to manage recording.

There are two main differences between this managed session and the [SHSession](shsession.md):

- [SHManagedSession](shmanagedsession.md) performs all recording of audio and signature generation.
- [SHManagedSession](shmanagedsession.md) won’t accept audio or Signatures that it didn’t generate.

Matching songs in Shazam requires enabling your app to access the catalog. For more information on enabling your app, see [Enable ShazamKit for an App ID](https://developer.apple.com/help/account/configure-app-services/shazamkit).

The code below shows searching for a match in the Shazam catalog using [SHManagedSession](shmanagedsession.md):

```swift
// Set up the session.
let session = SHManagedSession()

// Check for a match.
let result = await session.result()

// Use the result.
switch result {
  case .match(let match):
       // Match found.
  case .noMatch(let signature):
       // No match found.
  case .error(let error, let signature):
       // An error occurred.
}
```

## Topics

### Creating a managed session object

- [init()](shmanagedsession/init%28%29.md): Creates a new managed session object for matching songs in the Shazam Music catalog.
- [init(catalog:)](shmanagedsession/init%28catalog_%29.md): Creates a new managed session object for matching audio in a custom catalog.

### Getting the session state

- [state](shmanagedsession/state-swift.property.md): The current state of the managed session.
- [SHManagedSession.State](shmanagedsession/state-swift.enum.md): The state of a managed session.

### Returning queries

- [result()](shmanagedsession/result%28%29.md): Performs an asynchronous match with a single signature.
- [results](shmanagedsession/results.md): The results as an asynchronous sequence of matches.
- [cancel()](shmanagedsession/cancel%28%29.md): Cancels the currently running match attempt.
- [prepare()](shmanagedsession/prepare%28%29.md): Preallocates the resources needed for a match, which increases the responsiveness of matches.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.
