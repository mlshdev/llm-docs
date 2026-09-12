> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption/serverchallenge](https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption/serverchallenge)

# serverChallenge (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.

## Declaration

```swift
static let serverChallenge: AVContentKeySessionServerPlaybackContextOption
```

<a id="Discussion"></a>

## Discussion

Specify this value as an 8-byte [NSData](../../foundation/nsdata.md) object. If you don’t specify a value for this key, the system assumes a default server challenge of `0`.

## See Also

### Server playback context options

- [protocolVersions](protocolversions.md): Specifies the versions of the content protection protocols supported by the application.

# AVContentKeySessionServerPlaybackContextOptionServerChallenge (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.

## Declaration

```objectivec
extern AVContentKeySessionServerPlaybackContextOption const AVContentKeySessionServerPlaybackContextOptionServerChallenge;
```

<a id="Discussion"></a>

## Discussion

Specify this value as an 8-byte [NSData](../../foundation/nsdata.md) object. If you don’t specify a value for this key, the system assumes a default server challenge of `0`.

## See Also

### Server playback context options

- [AVContentKeySessionServerPlaybackContextOptionProtocolVersions](protocolversions.md): Specifies the versions of the content protection protocols supported by the application.
