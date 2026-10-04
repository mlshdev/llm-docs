> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usercallmediaparametershavechanged

# UserCallMediaParametersHaveChanged

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Indicates to the system that the media parameters changed.

## Declaration

```objectivec
virtual kern_return_t UserCallMediaParametersHaveChanged();
```

<a id="return-value"></a>

## Return Value

A value that indicates the result of handling the change. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

After calling this method, the framework checks the medium-capacity data — the block size and block count — and takes necessary action if they changed.
