> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/unbounded](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/unbounded)

# unbounded (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+

A picker discovery that only times out when the app tells it to.

## Declaration

```swift
static let unbounded: ASPickerDisplaySettings.DiscoveryTimeout
```

## Mentioned In

- [Discovering and configuring accessories](../../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this timeout value if you set the picker display option [filterDiscoveryResults](../options-swift.struct/filterdiscoveryresults.md) and need unlimited time for filtering. After performing manual discovery, perform the manual timeout by calling the [ASAccessorySession](../../asaccessorysession.md) method [finishPickerDiscovery(completionHandler:)](../../asaccessorysession/finishpickerdiscovery%28completionhandler_%29.md). This process shows a timeout message if your filtering added no accessories to the picker, or returns silently if you updated the picker.

## See Also

### Determining discovery timeout

- [default](../default.md): An empty settings object.
- [short](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [medium](medium.md): A picker discovery timeout value that times out after about two minutes.
- [long](long.md): A picker discovery timeout value that times out after about five minutes.

# ASPickerDisplaySettingsDiscoveryTimeoutUnbounded (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Global Variable  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+

A picker discovery that only times out when the app tells it to.

## Declaration

```objectivec
extern const ASPickerDisplaySettingsDiscoveryTimeout ASPickerDisplaySettingsDiscoveryTimeoutUnbounded;
```

## Mentioned In

- [Discovering and configuring accessories](../../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this timeout value if you set the picker display option [ASPickerDisplaySettingsOptionFilterDiscoveryResults](../options-swift.struct/filterdiscoveryresults.md) and need unlimited time for filtering. After performing manual discovery, perform the manual timeout by calling the [ASAccessorySession](../../asaccessorysession.md) method [finishPickerDiscovery:](../../asaccessorysession/finishpickerdiscovery%28completionhandler_%29.md). This process shows a timeout message if your filtering added no accessories to the picker, or returns silently if you updated the picker.

## See Also

### Determining discovery timeout

- [defaultSettings](../default.md): An empty settings object.
- [ASPickerDisplaySettingsDiscoveryTimeoutShort](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [ASPickerDisplaySettingsDiscoveryTimeoutMedium](medium.md): A picker discovery timeout value that times out after about two minutes.
- [ASPickerDisplaySettingsDiscoveryTimeoutLong](long.md): A picker discovery timeout value that times out after about five minutes.
