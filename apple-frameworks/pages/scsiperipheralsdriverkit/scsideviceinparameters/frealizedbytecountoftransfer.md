> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceinparameters/frealizedbytecountoftransfer](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceinparameters/frealizedbytecountoftransfer)

# fRealizedByteCountOfTransfer

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

The byte count of the tranferred data.

## Declaration

```objectivec
uint64_t fRealizedByteCountOfTransfer;
```

## See Also

### Accessing response properties

- [fCompletionStatus](fcompletionstatus.md): The status of the task at completion of the call, such as good, busy, or timeout.
- [fServiceResponse](fserviceresponse.md): The response from the service, such as complete, in process, or rejected.
- [fSenseDataValid](fsensedatavalid.md): A Boolean value that indicates whether the sense data that the kernel provides is valid.
