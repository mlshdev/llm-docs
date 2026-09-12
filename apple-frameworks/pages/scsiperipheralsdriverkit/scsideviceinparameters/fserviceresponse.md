> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceinparameters/fserviceresponse](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceinparameters/fserviceresponse)

# fServiceResponse

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

The response from the service, such as complete, in process, or rejected.

## Declaration

```objectivec
SCSIServiceResponse fServiceResponse;
```

<a id="Discussion"></a>

## Discussion

Use the values that [SCSIServiceResponse](../../iokit/scsiserviceresponse.md) defines to evaluate this field.

## See Also

### Accessing response properties

- [fCompletionStatus](fcompletionstatus.md): The status of the task at completion of the call, such as good, busy, or timeout.
- [fRealizedByteCountOfTransfer](frealizedbytecountoftransfer.md): The byte count of the tranferred data.
- [fSenseDataValid](fsensedatavalid.md): A Boolean value that indicates whether the sense data that the kernel provides is valid.
