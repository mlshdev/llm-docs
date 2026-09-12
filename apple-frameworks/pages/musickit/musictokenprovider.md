> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musictokenprovider](https://developer.apple.com/documentation/musickit/musictokenprovider)

# MusicTokenProvider

**Framework:** MusicKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that music requests use to access Apple Music API.

## Declaration

```swift
typealias MusicTokenProvider = MusicUserTokenProvider & MusicDeveloperTokenProvider
```

<a id="discussion"></a>

## Discussion

A token provider for MusicKit needs to be a subclass of [MusicUserTokenProvider](musicusertokenprovider.md) which conforms to the [MusicDeveloperTokenProvider](musicdevelopertokenprovider.md) protocol.

## See Also

### Token management

- [MusicDeveloperTokenProvider](musicdevelopertokenprovider.md): A set of methods that music requests use to access Apple Music API.
- [MusicUserTokenProvider](musicusertokenprovider.md): A class that music requests use to fetch user tokens your app requires to access Apple Music API.
- [MusicTokenRequestOptions](musictokenrequestoptions.md): Options that music requests pass into token provider methods to fetch a required token for accessing Apple Music API.
- [MusicTokenRequestError](musictokenrequesterror.md): An error that the token provider or music requests can throw upon requesting any token necessary for accessing Apple Music API.
- [DefaultMusicTokenProvider](defaultmusictokenprovider.md): The default token provider that music requests use to access Apple Music API.
