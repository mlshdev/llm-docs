> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacedevice/wristlocation

# wristLocation (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The wrist on which the user wears the Apple Watch.

## Declaration

```swift
var wristLocation: WKInterfaceDeviceWristLocation { get }
```

<a id="Discussion"></a>

## Discussion

Users specify the wrist placement during the initial setup of Apple Watch, and this property reflects the information provided by the user.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.

# wristLocation (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The wrist on which the user wears the Apple Watch.

## Declaration

```objectivec
@property (nonatomic, readonly) WKInterfaceDeviceWristLocation wristLocation;
```

<a id="Discussion"></a>

## Discussion

Users specify the wrist placement during the initial setup of Apple Watch, and this property reflects the information provided by the user.

## See Also

### Reading the Device Settings

- [name](name.md): The name of the device.
- [model](model.md): The model information for the device.
- [localizedModel](localizedmodel.md): The localized version of the model information.
- [WKInterfaceDeviceWristLocation](../wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](../wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](preferredcontentsizecategory.md): The preferred font-sizing option.
