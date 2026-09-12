> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musictokenrequestoptions](https://developer.apple.com/documentation/musickit/musictokenrequestoptions)

# MusicTokenRequestOptions

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that music requests pass into token provider methods to fetch a required token for accessing Apple Music API.

## Declaration

```swift
struct MusicTokenRequestOptions
```

## Topics

### Type Properties

- [ignoreCache](musictokenrequestoptions/ignorecache.md): An option that indicates the token provider needs to discard any cached token and generate a new token.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Token management

- [MusicTokenProvider](musictokenprovider.md): An object that music requests use to access Apple Music API.
- [MusicDeveloperTokenProvider](musicdevelopertokenprovider.md): A set of methods that music requests use to access Apple Music API.
- [MusicUserTokenProvider](musicusertokenprovider.md): A class that music requests use to fetch user tokens your app requires to access Apple Music API.
- [MusicTokenRequestError](musictokenrequesterror.md): An error that the token provider or music requests can throw upon requesting any token necessary for accessing Apple Music API.
- [DefaultMusicTokenProvider](defaultmusictokenprovider.md): The default token provider that music requests use to access Apple Music API.
