> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrol/registerforlaunchoncarkeyevent()](https://developer.apple.com/documentation/carkey/carkeyremotecontrol/registerforlaunchoncarkeyevent())

# registerForLaunchOnCarKeyEvent()

**Framework:** CarKey  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · watchOS 26.0+

Register your app to be relaunched in the background on CarKey events. Under certain conditions the system will not relaunch the app regardless of CarKey events.

## Declaration

```swift
class func registerForLaunchOnCarKeyEvent() throws
```

<a id="discussion"></a>

## Discussion

Because of user actions, it’s possible that an app may no longer be eligible to be relaunched in response to CarKey events. Therefore it’s important to educate the users of your app, so that they understand how their actions impact its functionality.

Well designed apps will be resilient under such conditions.

Registered apps will be relaunched on CarKey events under the following conditions:

- App removed from memory (while having an active CarKeyRemoteControlSession)
- App crashed (while having an active CarKeyRemoteControlSession)
- Device restarted and unlocked for the first time
