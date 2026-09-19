> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype07/userresetdevice

# UserResetDevice

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

## Declaration

```objectivec
virtual kern_return_t UserResetDevice(SCSIServiceResponse *response);
```

## See Also

### Instance Methods

- [UserDetermineDeviceCharacteristics](userdeterminedevicecharacteristics.md)
- [UserReportMediumBlockSize](userreportmediumblocksize.md)
- [UserResumeServices](userresumeservices.md)
- [UserSendCDB](usersendcdb.md)
- [UserSuspendServices](usersuspendservices.md)
