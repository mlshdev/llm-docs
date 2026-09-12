> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/name](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/name)

# name (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the device.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property varies according to the device’s operating system version number:

| OS | Default value | Example |
| --- | --- | --- |
| watchOS 8 and earlier | User-assigned device name | `"Ravi’s Apple Watch Ultra (49mm)"` |
| watchOS 9 and later | Generic device name | `"Apple Watch Ultra (49mm)"` |

In watchOS, the *user-assigned device name* is available in the Settings app under General \> About \> Name. To access the user-assigned device name through this property in watchOS 9 and later, your app must meet certain criteria and be assigned an entitlement. For information, see [com.apple.developer.device-information.user-assigned-device-name](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.device-information.user-assigned-device-name).

> **Related Sessions from WWDC22**

>  Session 10096: [What’s new in privacy](https://developer.apple.com/videos/play/wwdc2022/10096)

## See Also

### Reading the Device Settings

- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.

# name (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The default value of this property varies according to the device’s operating system version number:

| OS | Default value | Example |
| --- | --- | --- |
| watchOS 8 and earlier | User-assigned device name | `"Ravi’s Apple Watch Ultra (49mm)"` |
| watchOS 9 and later | Generic device name | `"Apple Watch Ultra (49mm)"` |

In watchOS, the *user-assigned device name* is available in the Settings app under General \> About \> Name. To access the user-assigned device name through this property in watchOS 9 and later, your app must meet certain criteria and be assigned an entitlement. For information, see [com.apple.developer.device-information.user-assigned-device-name](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.device-information.user-assigned-device-name).

> **Related Sessions from WWDC22**

>  Session 10096: [What’s new in privacy](https://developer.apple.com/videos/play/wwdc2022/10096)

## See Also

### Reading the Device Settings

- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.
