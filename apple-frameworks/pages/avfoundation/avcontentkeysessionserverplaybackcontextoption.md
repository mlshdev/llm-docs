> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption](https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption)

# AVContentKeySessionServerPlaybackContextOption (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for specifying additional information for generating server playback context (SPC).

## Declaration

```swift
struct AVContentKeySessionServerPlaybackContextOption
```

## Topics

### Server playback context options

- [protocolVersions](avcontentkeysessionserverplaybackcontextoption/protocolversions.md): Specifies the versions of the content protection protocols supported by the application.
- [serverChallenge](avcontentkeysessionserverplaybackcontextoption/serverchallenge.md): Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.

### Initializing an options structure

- [init(rawValue:)](avcontentkeysessionserverplaybackcontextoption/init%28rawvalue_%29.md): Creates a playback context options structure with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Invalidating content keys

- [invalidatePersistableContentKey(\_:options:completionHandler:)](avcontentkeysession/invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [invalidateAllPersistableContentKeys(forApp:options:completionHandler:)](avcontentkeysession/invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.

# AVContentKeySessionServerPlaybackContextOption (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for specifying additional information for generating server playback context (SPC).

## Declaration

```objectivec
typedef NSString * AVContentKeySessionServerPlaybackContextOption;
```

## Topics

### Server playback context options

- [AVContentKeySessionServerPlaybackContextOptionProtocolVersions](avcontentkeysessionserverplaybackcontextoption/protocolversions.md): Specifies the versions of the content protection protocols supported by the application.
- [AVContentKeySessionServerPlaybackContextOptionServerChallenge](avcontentkeysessionserverplaybackcontextoption/serverchallenge.md): Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.

## See Also

### Invalidating content keys

- [invalidatePersistableContentKey:options:completionHandler:](avcontentkeysession/invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [invalidateAllPersistableContentKeysForApp:options:completionHandler:](avcontentkeysession/invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
