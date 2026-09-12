> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/model](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/model)

# model (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The model information for the device.

## Declaration

```swift
var model: String { get }
```

<a id="Discussion"></a>

## Discussion

For Apple Watch, the value of this string is `Apple Watch`.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.

# model (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The model information for the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * model;
```

<a id="Discussion"></a>

## Discussion

For Apple Watch, the value of this string is `Apple Watch`.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.
