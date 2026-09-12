> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/crownorientation](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/crownorientation)

# crownOrientation (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The side on which the crown is positioned.

## Declaration

```swift
var crownOrientation: WKInterfaceDeviceCrownOrientation { get }
```

<a id="Discussion"></a>

## Discussion

Users specify the Digital Crown orientation during the initial setup of Apple Watch, and this property reflects the information provided by the user.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.

# crownOrientation (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The side on which the crown is positioned.

## Declaration

```objectivec
@property (nonatomic, readonly) WKInterfaceDeviceCrownOrientation crownOrientation;
```

<a id="Discussion"></a>

## Discussion

Users specify the Digital Crown orientation during the initial setup of Apple Watch, and this property reflects the information provided by the user.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.
