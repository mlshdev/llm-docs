> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/launchmode/player](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/launchmode/player)

# AVSystemRoute.LaunchMode.player

**Framework:** AVSystemRouting  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Launches the system’s built-in media player on the remote device.

## Declaration

```swift
case player
```

## Mentioned In

- [Routing and streaming media to remote devices](../../routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](../../routing-media-to-third-party-devices.md)

<a id="discussion"></a>

## Discussion

Use this mode when you want to use the remote device’s built-in media player instead of launching a custom application. This provides a standardized playback experience without requiring a corresponding application to be installed on the remote device.

To support the [AVSystemRoute.LaunchMode.player](player.md) launch mode, the `MDESupportsUniversalURLPlayback` key must be set in the app’s `Info.plist` file. For example:

```xml
<key>MDESupportsUniversalURLPlayback</key>
<true/>
```

> **Important**

> If `MDESupportsUniversalURLPlayback` is not set to `true`, calls to [start()](../../avsystemroutesession-gp78/start%28%29.md) fail.
