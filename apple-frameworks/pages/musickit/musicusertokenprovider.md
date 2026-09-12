> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicusertokenprovider](https://developer.apple.com/documentation/musickit/musicusertokenprovider)

# MusicUserTokenProvider

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A class that music requests use to fetch user tokens your app requires to access Apple Music API.

## Declaration

```swift
class MusicUserTokenProvider
```

## Topics

### Initializers

- [init()](musicusertokenprovider/init%28%29.md): Creates a user token provider.

### Instance Methods

- [userToken(for:options:)](musicusertokenprovider/usertoken%28for_options_%29.md): Fetches and returns a user token for Apple Music API.

## Relationships

### Inherited By

- [DefaultMusicTokenProvider](defaultmusictokenprovider.md)

## See Also

### Token management

- [MusicTokenProvider](musictokenprovider.md): An object that music requests use to access Apple Music API.
- [MusicDeveloperTokenProvider](musicdevelopertokenprovider.md): A set of methods that music requests use to access Apple Music API.
- [MusicTokenRequestOptions](musictokenrequestoptions.md): Options that music requests pass into token provider methods to fetch a required token for accessing Apple Music API.
- [MusicTokenRequestError](musictokenrequesterror.md): An error that the token provider or music requests can throw upon requesting any token necessary for accessing Apple Music API.
- [DefaultMusicTokenProvider](defaultmusictokenprovider.md): The default token provider that music requests use to access Apple Music API.
