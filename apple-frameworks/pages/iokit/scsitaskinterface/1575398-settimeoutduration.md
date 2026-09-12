> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575398-settimeoutduration](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575398-settimeoutduration)

# SetTimeoutDuration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to set the timeout duration for the SCSITask.

## Declaration

```objectivec
IOReturn (*SetTimeoutDuration)(void *task, UInt32 inTimeoutDurationMS);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `inTimeoutDurationMS`: UInt32 representing the timeout in milliseconds.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSucces or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to set the timeout duration for the SCSITask. The timeout duration is counted in milliseconds. A value of zero is equivalent to "Wait Forever", but on some buses, this isn't possible, so ULONG_MAX is used.
