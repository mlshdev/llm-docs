> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdoeshbasupportscsiparallelfeature](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdoeshbasupportscsiparallelfeature)

# UserDoesHBASupportSCSIParallelFeature

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Determines whether the driver extension class supports a specific feature in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t UserDoesHBASupportSCSIParallelFeature(uint32_t theValue, bool *result);
```

## Parameters

- `theValue`: The SCSI parallel interconnect (SPI) feature to check.
- `result`: A pointer to a Boolean value. On return, set this value to `true` if it supports the feature, and `false` if it doesn’t.

<a id="return-value"></a>

## Return Value

A value that indicates the result of determining if the driver extension class supports the feature. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

The SCSI parallel interconnect standard defines the features that `theValue` specifies.

## See Also

### Managing Host Bus Adapters

- [UserReportInitiatorIdentifier](userreportinitiatoridentifier.md): Gets the SCSI device identifier for the host bus adapter (HBA) in response to a call from the framework.
- [UserReportHighestSupportedDeviceID](userreporthighestsupporteddeviceid.md): Gets the highest supported SCSI device identifier in response to a call from the framework.
- [UserReportMaximumTaskCount](userreportmaximumtaskcount.md): Gets the maximum number of outstanding tasks the HBA can process in response to a call from the framework.
- [UserDoesHBAPerformDeviceManagement](userdoeshbaperformdevicemanagement.md): Determines if the host bus adapter (HBA) manages devices in response to a call from the framework.
- [UserReportHBAHighestLogicalUnitNumber](userreporthbahighestlogicalunitnumber.md): Gets the highest logical unit number (LUN) in response to a call from the framework.
- [UserDoesHBAPerformAutoSense](userdoeshbaperformautosense.md): Determines if the driver extension class automatically performs autosense and provides autosense data for each I/O in response to a call from the framework.
- [UserDoesHBASupportMultiPathing](userdoeshbasupportmultipathing.md): Queries the HBA child class to determine if it supports multipathing in response to a call from the framework.
- [SCSIParallelFeature](../scsiparallelfeature.md): A feature that the driver extension supports.
- [UserMapHBAData](usermaphbadata.md): Maps any host bus adapter (HBA)-specific task data in response to a call from the framework.
- [UserSetHBAProperties](usersethbaproperties.md): Sets multiple properties for a host bus adapter.
- [UserRemoveHBAProperties](userremovehbaproperties.md): Removes properties from a host bus adapter in response to a call from the framework.
- [UserReportHBAConstraints](userreporthbaconstraints.md): Reports the I/O constraints for this controller.
