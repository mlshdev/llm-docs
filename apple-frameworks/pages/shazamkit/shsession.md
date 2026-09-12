> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession](https://developer.apple.com/documentation/shazamkit/shsession)

# SHSession (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.

## Declaration

```swift
class SHSession
```

## Mentioned In

- [Matching audio using the built-in microphone](matching-audio-using-the-built-in-microphone.md)

<a id="overview"></a>

## Overview

Prepare to make matches by:

- Creating a session for the catalog that contains the reference signatures
- Adding your delegate that receives the match results

Search for a match in one of two ways:

- Generate a signature for the captured audio and call [match(\_:)](shsession/match%28__%29.md)
- Call [matchStreamingBuffer(\_:at:)](shsession/matchstreamingbuffer%28__at_%29.md) with a streaming audio buffer, and ShazamKit generates the signature for you

Searching the catalog is asynchronous. The session calls your delegate methods with the result.

Matching audio against the Shazam catalog requires enabling your app to access the catalog. If you are using a custom catalog, you don’t need to enable ShazamKit. For more information on enabling your app, see [Enable ShazamKit for an App ID](https://developer.apple.com/help/account/configure-app-services/shazamkit).

The code below shows searching for a match in the Shazam catalog using an existing audio buffer:

```swift
// Set up the session.
let session = SHSession()

// Create a signature from the captured audio buffer.
let signatureGenerator = SHSignatureGenerator()
try signatureGenerator.append(buffer, at: audioTime)
let signature = signatureGenerator.signature()

// Check for a match.
let result = await session.result(from: signature)

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

### Creating a session object

- [init()](shsession/init%28%29.md): Creates a new session object for matching songs in the Shazam Music catalog.
- [init(catalog:)](shsession/init%28catalog_%29.md): Creates a new session object for matching audio in a custom catalog.

### Making a match

- [match(\_:)](shsession/match%28__%29.md): Searches for the query signature in the reference signatures that the session catalog contains.
- [matchStreamingBuffer(\_:at:)](shsession/matchstreamingbuffer%28__at_%29.md): Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.
- [Matching audio using the built-in microphone](matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.

### Reading the session properties

- [delegate](shsession/delegate.md): The object that the session calls with the result of a match request.
- [catalog](shsession/catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.
- [results](shsession/results-swift.property.md): The results as an asynchronous sequence of matches.
- [SHSession.Results](shsession/results-swift.struct.md): An asynchronous sequence that emits updates from a session object query.

### Returning queries

- [result(from:)](shsession/result%28from_%29.md): Performs an asynchronous match with a signature you specify.
- [SHSession.Result](shsession/result.md): Identifies the result from an asynchronous sequence result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Match audio

- [SHManagedSession](shmanagedsession.md): An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.

# SHSession (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.

## Declaration

```objectivec
@interface SHSession : NSObject
```

## Mentioned In

- [Matching audio using the built-in microphone](matching-audio-using-the-built-in-microphone.md)

<a id="overview"></a>

## Overview

Prepare to make matches by:

- Creating a session for the catalog that contains the reference signatures
- Adding your delegate that receives the match results

Search for a match in one of two ways:

- Generate a signature for the captured audio and call [matchSignature:](shsession/match%28__%29.md)
- Call [matchStreamingBuffer:atTime:](shsession/matchstreamingbuffer%28__at_%29.md) with a streaming audio buffer, and ShazamKit generates the signature for you

Searching the catalog is asynchronous. The session calls your delegate methods with the result.

Matching audio against the Shazam catalog requires enabling your app to access the catalog. If you are using a custom catalog, you don’t need to enable ShazamKit. For more information on enabling your app, see [Enable ShazamKit for an App ID](https://developer.apple.com/help/account/configure-app-services/shazamkit).

The code below shows searching for a match in the Shazam catalog using an existing audio buffer:

```swift
// Set up the session.
let session = SHSession()

// Create a signature from the captured audio buffer.
let signatureGenerator = SHSignatureGenerator()
try signatureGenerator.append(buffer, at: audioTime)
let signature = signatureGenerator.signature()

// Check for a match.
let result = await session.result(from: signature)

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

### Creating a session object

- [init](shsession/init%28%29.md): Creates a new session object for matching songs in the Shazam Music catalog.
- [initWithCatalog:](shsession/init%28catalog_%29.md): Creates a new session object for matching audio in a custom catalog.

### Making a match

- [matchSignature:](shsession/match%28__%29.md): Searches for the query signature in the reference signatures that the session catalog contains.
- [matchStreamingBuffer:atTime:](shsession/matchstreamingbuffer%28__at_%29.md): Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.
- [Matching audio using the built-in microphone](matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.

### Reading the session properties

- [delegate](shsession/delegate.md): The object that the session calls with the result of a match request.
- [catalog](shsession/catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Match audio

- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
- [SHMediaItem](shmediaitem.md): An object that represents the metadata for a reference signature.
