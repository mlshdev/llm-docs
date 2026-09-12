> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usersethbaproperties](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usersethbaproperties)

# UserSetHBAProperties

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Sets multiple properties for a host bus adapter.

## Declaration

```objectivec
virtual kern_return_t UserSetHBAProperties(OSDictionary *properties);
```

## Parameters

- `properties`: A dictionary containing key-value pairs of properties.

<a id="return-value"></a>

## Return Value

A value that indicates the result of setting the properties. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension calls this method to set properties on the HBA. The `properties` directory can contain the following keys:

- [kIOPropertyVendorNameKey](../../iokit/kiopropertyvendornamekey.md)
- [kIOPropertyProductNameKey](../../iokit/kiopropertyproductnamekey.md)
- [kIOPropertyProductRevisionLevelKey](../../iokit/kiopropertyproductrevisionlevelkey.md)
- [kIOPropertyPortDescriptionKey](https://developer.apple.com/documentation/kernel/kiopropertyportdescriptionkey)
- [kIOPropertyPortSpeedKey](https://developer.apple.com/documentation/kernel/kiopropertyportspeedkey)
- [kIOPropertyPortTopologyKey](https://developer.apple.com/documentation/kernel/kiopropertyporttopologykey)
- [kIOPropertySCSIParallelSignalingTypeKey](https://developer.apple.com/documentation/kernel/kiopropertyscsiparallelsignalingtypekey)
- [kIOPropertyFibreChannelCableDescriptionKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelcabledescriptionkey)
- [kIOPropertyFibreChannelNodeWorldWideNameKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelnodeworldwidenamekey)
- [kIOPropertyFibreChannelPortWorldWideNameKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelportworldwidenamekey)
- [kIOPropertyFibreChannelAddressIdentifierKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechanneladdressidentifierkey)
- [kIOPropertyFibreChannelALPAKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelalpakey)
- [kIOPropertySASAddressKey](https://developer.apple.com/documentation/kernel/kiopropertysasaddresskey)

The value of each property should be a pointer to a valid [OSString](../../driverkit/osstring.md) object that represents the value for the property. The value must be of the proper type and size for the specified key.

## See Also

### Managing Host Bus Adapters

- [UserReportInitiatorIdentifier](userreportinitiatoridentifier.md): Gets the SCSI device identifier for the host bus adapter (HBA) in response to a call from the framework.
- [UserReportHighestSupportedDeviceID](userreporthighestsupporteddeviceid.md): Gets the highest supported SCSI device identifier in response to a call from the framework.
- [UserReportMaximumTaskCount](userreportmaximumtaskcount.md): Gets the maximum number of outstanding tasks the HBA can process in response to a call from the framework.
- [UserDoesHBAPerformDeviceManagement](userdoeshbaperformdevicemanagement.md): Determines if the host bus adapter (HBA) manages devices in response to a call from the framework.
- [UserReportHBAHighestLogicalUnitNumber](userreporthbahighestlogicalunitnumber.md): Gets the highest logical unit number (LUN) in response to a call from the framework.
- [UserDoesHBAPerformAutoSense](userdoeshbaperformautosense.md): Determines if the driver extension class automatically performs autosense and provides autosense data for each I/O in response to a call from the framework.
- [UserDoesHBASupportMultiPathing](userdoeshbasupportmultipathing.md): Queries the HBA child class to determine if it supports multipathing in response to a call from the framework.
- [UserDoesHBASupportSCSIParallelFeature](userdoeshbasupportscsiparallelfeature.md): Determines whether the driver extension class supports a specific feature in response to a call from the framework.
- [SCSIParallelFeature](../scsiparallelfeature.md): A feature that the driver extension supports.
- [UserMapHBAData](usermaphbadata.md): Maps any host bus adapter (HBA)-specific task data in response to a call from the framework.
- [UserRemoveHBAProperties](userremovehbaproperties.md): Removes properties from a host bus adapter in response to a call from the framework.
- [UserReportHBAConstraints](userreporthbaconstraints.md): Reports the I/O constraints for this controller.
