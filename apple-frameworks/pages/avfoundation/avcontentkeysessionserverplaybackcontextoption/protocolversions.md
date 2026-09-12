> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption/protocolversions](https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption/protocolversions)

# protocolVersions (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies the versions of the content protection protocols supported by the application.

## Declaration

```swift
static let protocolVersions: AVContentKeySessionServerPlaybackContextOption
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for this key, the system assumes a default protocol version of `1`.

## See Also

### Server playback context options

- [serverChallenge](serverchallenge.md): Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.

# AVContentKeySessionServerPlaybackContextOptionProtocolVersions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies the versions of the content protection protocols supported by the application.

## Declaration

```objectivec
extern AVContentKeySessionServerPlaybackContextOption const AVContentKeySessionServerPlaybackContextOptionProtocolVersions;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for this key, the system assumes a default protocol version of `1`.

## See Also

### Server playback context options

- [AVContentKeySessionServerPlaybackContextOptionServerChallenge](serverchallenge.md): Specifies a nonce to include in the secure server playback context (SPC) to prevent replay attacks.
