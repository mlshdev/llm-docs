> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceinparameters/fcompletionstatus](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceinparameters/fcompletionstatus)

# fCompletionStatus

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

The status of the task at completion of the call, such as good, busy, or timeout.

## Declaration

```objectivec
SCSITaskStatus fCompletionStatus;
```

<a id="Discussion"></a>

## Discussion

Use the values that [SCSITaskStatus](../../iokit/scsitaskstatus.md) defines to evaluate this field.

## See Also

### Accessing response properties

- [fServiceResponse](fserviceresponse.md): The response from the service, such as complete, in process, or rejected.
- [fRealizedByteCountOfTransfer](frealizedbytecountoftransfer.md): The byte count of the tranferred data.
- [fSenseDataValid](fsensedatavalid.md): A Boolean value that indicates whether the sense data that the kernel provides is valid.
