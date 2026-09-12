> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575338-getscsiserviceresponse](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575338-getscsiserviceresponse)

# GetSCSIServiceResponse

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the SCSIServiceResponse from the SCSITask.

## Declaration

```objectivec
IOReturn (*GetSCSIServiceResponse)(void *task, SCSIServiceResponse *outServiceResponse);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `outServiceResponse`: Pointer to an SCSIServiceResponse.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the SCSIServiceResponse from the SCSITask.
