> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdoeshbasupportmultipathing](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdoeshbasupportmultipathing)

# UserDoesHBASupportMultiPathing

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Queries the HBA child class to determine if it supports multipathing in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t UserDoesHBASupportMultiPathing(bool *result);
```

## Parameters

- `result`: A pointer to a Boolean value. On return, set this value to `true` if the HBA supports multipathing, and `false` if it doesn’t.

<a id="return-value"></a>

## Return Value

A value that indicates the result of determining if the driver extension class supports multipathing. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

## See Also

### Managing Host Bus Adapters

- [UserReportInitiatorIdentifier](userreportinitiatoridentifier.md): Gets the SCSI device identifier for the host bus adapter (HBA) in response to a call from the framework.
- [UserReportHighestSupportedDeviceID](userreporthighestsupporteddeviceid.md): Gets the highest supported SCSI device identifier in response to a call from the framework.
- [UserReportMaximumTaskCount](userreportmaximumtaskcount.md): Gets the maximum number of outstanding tasks the HBA can process in response to a call from the framework.
- [UserDoesHBAPerformDeviceManagement](userdoeshbaperformdevicemanagement.md): Determines if the host bus adapter (HBA) manages devices in response to a call from the framework.
- [UserReportHBAHighestLogicalUnitNumber](userreporthbahighestlogicalunitnumber.md): Gets the highest logical unit number (LUN) in response to a call from the framework.
- [UserDoesHBAPerformAutoSense](userdoeshbaperformautosense.md): Determines if the driver extension class automatically performs autosense and provides autosense data for each I/O in response to a call from the framework.
- [UserDoesHBASupportSCSIParallelFeature](userdoeshbasupportscsiparallelfeature.md): Determines whether the driver extension class supports a specific feature in response to a call from the framework.
- [SCSIParallelFeature](../scsiparallelfeature.md): A feature that the driver extension supports.
- [UserMapHBAData](usermaphbadata.md): Maps any host bus adapter (HBA)-specific task data in response to a call from the framework.
- [UserSetHBAProperties](usersethbaproperties.md): Sets multiple properties for a host bus adapter.
- [UserRemoveHBAProperties](userremovehbaproperties.md): Removes properties from a host bus adapter in response to a call from the framework.
- [UserReportHBAConstraints](userreporthbaconstraints.md): Reports the I/O constraints for this controller.
