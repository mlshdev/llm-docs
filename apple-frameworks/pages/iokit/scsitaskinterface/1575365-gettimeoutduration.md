> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575365-gettimeoutduration](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575365-gettimeoutduration)

# GetTimeoutDuration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the timeout duration for the SCSITask.

## Declaration

```objectivec
UInt32 (*GetTimeoutDuration)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns a value between zero and ULONG_MAX.

<a id="discussion"></a>

## Discussion

This method can be used to get the timeout duration for the SCSITask. The timeout duration is counted in milliseconds.
