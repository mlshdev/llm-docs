> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/preferredcontentsizecategory](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/preferredcontentsizecategory)

# preferredContentSizeCategory (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The preferred font-sizing option.

## Declaration

```swift
var preferredContentSizeCategory: String { get }
```

<a id="Discussion"></a>

## Discussion

Users can request that apps display fonts in a size that is larger or smaller than the normal font size defined by the system. For example, a user with a visual impairment might request a larger default font size to make it easier to read text. Font objects returned by the system automatically scale based on the user’s preference. When requesting font objects from code, use the value of this property to request a font object of the appropriate size.

For a list of possible values, see “Content Size Category Constants” in [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication).

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.

# preferredContentSizeCategory (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The preferred font-sizing option.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * preferredContentSizeCategory;
```

<a id="Discussion"></a>

## Discussion

Users can request that apps display fonts in a size that is larger or smaller than the normal font size defined by the system. For example, a user with a visual impairment might request a larger default font size to make it easier to read text. Font objects returned by the system automatically scale based on the user’s preference. When requesting font objects from code, use the value of this property to request a font object of the appropriate size.

For a list of possible values, see “Content Size Category Constants” in [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication).

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [wristLocation](wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
