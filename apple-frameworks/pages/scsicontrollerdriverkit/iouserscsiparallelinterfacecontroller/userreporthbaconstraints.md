> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userreporthbaconstraints](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userreporthbaconstraints)

# UserReportHBAConstraints

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Reports the I/O constraints for this controller.

## Declaration

```objectivec
virtual kern_return_t UserReportHBAConstraints(OSDictionary *constraints);
```

## Parameters

- `constraints`: A dictionary containing I/O constraint keys, and Boolean values indicating that the device supports the constraint. See the discussion for valid and required keys.

<a id="return-value"></a>

## Return Value

A value that indicates the result of reporting the HBA constraints. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

The valid keys for the `constraints` dictionary are as follows:

| Key name | Required? |
| --- | --- |
| [kIOMaximumSegmentCountReadKey](../../iokit/kiomaximumsegmentcountreadkey.md) | Yes |
| [kIOMaximumSegmentCountWriteKey](../../iokit/kiomaximumsegmentcountwritekey.md) | Yes |
| [kIOMaximumSegmentByteCountReadKey](../../iokit/kiomaximumsegmentbytecountreadkey.md) | Yes |
| [kIOMaximumSegmentByteCountWriteKey](../../iokit/kiomaximumsegmentbytecountwritekey.md) | Yes |
| [kIOMinimumSegmentAlignmentByteCountKey](../../iokit/kiominimumsegmentalignmentbytecountkey.md) | Yes |
| [kIOMaximumSegmentAddressableBitCountKey](../../iokit/kiomaximumsegmentaddressablebitcountkey.md) | Yes |
| `kIOMinimumHBADataAlignmentMaskKey` | Yes |
| `kIOHierarchicalLogicalUnitSupportKey` | No |

Subclasses must call this method from the dext before [UserInitializeController](userinitializecontroller.md) returns.

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
- [UserSetHBAProperties](usersethbaproperties.md): Sets multiple properties for a host bus adapter.
- [UserRemoveHBAProperties](userremovehbaproperties.md): Removes properties from a host bus adapter in response to a call from the framework.
