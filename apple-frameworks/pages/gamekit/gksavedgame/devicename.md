> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgame/devicename](https://developer.apple.com/documentation/gamekit/gksavedgame/devicename)

# deviceName (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The name of the device that the player uses to save the game.

## Declaration

```swift
var deviceName: String? { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, the user sets the device name by choosing Settings \> General \> About \> Name. To access this device name, your app needs to meet certain criteria and set the [com.apple.developer.device-information.user-assigned-device-name](../../bundleresources/entitlements/com.apple.developer.device-information.user-assigned-device-name.md) entitlement. Otherwise, the default value for this property is the generic device name.

> **Note**

>  In iOS 15 and earlier, the default value for this property is the user-assigned device name in Settings.

## See Also

### Retrieving Information About a Saved Game File

- [name](name.md): The name of the saved game.
- [modificationDate](modificationdate.md): The date when you saved the game data or modified it.

# deviceName (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The name of the device that the player uses to save the game.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSString * deviceName;
```

<a id="Discussion"></a>

## Discussion

In iOS, the user sets the device name by choosing Settings \> General \> About \> Name. To access this device name, your app needs to meet certain criteria and set the [com.apple.developer.device-information.user-assigned-device-name](../../bundleresources/entitlements/com.apple.developer.device-information.user-assigned-device-name.md) entitlement. Otherwise, the default value for this property is the generic device name.

> **Note**

>  In iOS 15 and earlier, the default value for this property is the user-assigned device name in Settings.

## See Also

### Retrieving Information About a Saved Game File

- [name](name.md): The name of the saved game.
- [modificationDate](modificationdate.md): The date when you saved the game data or modified it.
