> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserhiddevice/newreportdescriptor

# newReportDescriptor

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns the data in the HID device’s report descriptor.

## Declaration

```objectivec
virtual OSData * newReportDescriptor();
```

<a id="return-value"></a>

## Return Value

An [OSData](../../driverkit/osdata.md) object containing the report descriptor for the device.

<a id="Discussion"></a>

## Discussion

Override this method and use it to fetch the report descriptor from the device. Return the raw bytes for that report in an [OSData](../../driverkit/osdata.md) object.
