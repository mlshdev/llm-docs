> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskcallbackfunction](https://developer.apple.com/documentation/iokit/scsitaskcallbackfunction)

# SCSITaskCallbackFunction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Asynchronous callback routine definition.

## Declaration

```objectivec
typedef void (*SCSITaskCallbackFunction)(SCSIServiceResponse serviceResponse, SCSITaskStatus taskStatus, UInt64 bytesTransferred, void *refCon);
```

## Parameters

- `serviceResponse`: An SCSIServiceResponse returned by the protocol transport.
- `taskStatus`: An SCSITaskStatus to indicate the task's status
- `bytesTransferred`: A total byte count of bytes transferred.
- `refCon`: The refCon passed when the task was executed.

<a id="discussion"></a>

## Discussion

Asynchronous callback routine definition. Any function which is used as a callback routine for SCSITasks must conform to this function definition.
