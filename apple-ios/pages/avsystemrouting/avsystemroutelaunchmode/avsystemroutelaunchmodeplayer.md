> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutelaunchmode/avsystemroutelaunchmodeplayer](https://developer.apple.com/documentation/avsystemrouting/avsystemroutelaunchmode/avsystemroutelaunchmodeplayer)

# AVSystemRouteLaunchModePlayer

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst

Launches the system’s built-in media player on the remote device.

## Declaration

```objectivec
AVSystemRouteLaunchModePlayer
```

<a id="discussion"></a>

## Discussion

Use this mode when you want to use the remote device’s built-in media player instead of launching a custom application. This provides a standardized playback experience without requiring a corresponding application to be installed on the remote device.

To support the `AVSystemRouteLaunchModePlayer` launch mode, the `MDESupportsUniversalURLPlayback` key must be set in the app’s `Info.plist` file. For example:

```xml
<key>MDESupportsUniversalURLPlayback</key>
<true/>
```

> **Important**

> If `MDESupportsUniversalURLPlayback` is not set to `true`, calls to [startWithCompletionHandler:](../avsystemroutesession-5i6j6/startwithcompletionhandler_.md) fail.
