> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceinparameters/fsensedatavalid](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceinparameters/fsensedatavalid)

# fSenseDataValid

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

A Boolean value that indicates whether the sense data that the kernel provides is valid.

## Declaration

```objectivec
bool fSenseDataValid;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `false`.

## See Also

### Accessing response properties

- [fCompletionStatus](fcompletionstatus.md): The status of the task at completion of the call, such as good, busy, or timeout.
- [fServiceResponse](fserviceresponse.md): The response from the service, such as complete, in process, or rejected.
- [fRealizedByteCountOfTransfer](frealizedbytecountoftransfer.md): The byte count of the tranferred data.
