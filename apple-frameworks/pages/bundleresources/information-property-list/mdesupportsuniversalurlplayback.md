> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/mdesupportsuniversalurlplayback](https://developer.apple.com/documentation/bundleresources/information-property-list/mdesupportsuniversalurlplayback)

# MDESupportsUniversalURLPlayback

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A Boolean value that indicates whether an app supports URL-based playback via a media device extension.

## Details

`MDESupportsUniversalURLPlayback`

<a id="Discussion"></a>

## Discussion

Set this key to `true` in your media app’s `Info.plist` file to turn on the [AVSystemRoute.LaunchMode.player](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/launchmode/player) launch mode, which uses the remote device’s built-in media player to play a URL:

```xml
<key>MDESupportsUniversalURLPlayback</key>
<true/>
```

When you set this key to `true`, your app can start a playback session using [AVSystemRouteSession](https://developer.apple.com/documentation/avsystemrouting/avsystemroutesession-gp78) with a media URL and the [AVSystemRoute.LaunchMode.player](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/launchmode/player) launch mode. The system routes the URL to the device’s built-in player without requiring a corresponding application on the remote device.

If you don’t set this key to `true`, calls to [start()](https://developer.apple.com/documentation/avsystemrouting/avsystemroutesession-gp78/start%28%29) with the [AVSystemRoute.LaunchMode.player](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/launchmode/player) launch mode fail.

## See Also

### AVSystemRouting

- [MDESupportedProtocols](mdesupportedprotocols.md): A dictionary that declares which media sharing extension protocols an app supports.
