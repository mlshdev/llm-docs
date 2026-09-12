> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicdatarequest](https://developer.apple.com/documentation/musickit/musicdatarequest)

# MusicDataRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A request for loading data from an arbitrary Apple Music API endpoint.

## Declaration

```swift
struct MusicDataRequest
```

## Topics

### Structures

- [MusicDataRequest.Error](musicdatarequest/error.md): An error that the Apple Music API returns.

### Initializers

- [init(urlRequest:)](musicdatarequest/init%28urlrequest_%29.md): Creates a data request with a URL request.

### Instance Properties

- [urlRequest](musicdatarequest/urlrequest.md): The URL request for the data request.

### Instance Methods

- [response()](musicdatarequest/response%28%29.md): Fetches data from the Apple Music API endpoint that the URL request defines.

### Type Properties

- [currentCountryCode](musicdatarequest/currentcountrycode.md): Fetches the current country code for the user’s Apple Music account.
- [tokenProvider](musicdatarequest/tokenprovider.md): The shared token provider for fetching tokens that Apple Music API requires.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### General Purpose Data Request

- [MusicDataResponse](musicdataresponse.md): An object containing results for a data request.
