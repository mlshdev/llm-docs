> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype07/usersendcdb](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype07/usersendcdb)

# UserSendCDB

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

## Declaration

```objectivec
virtual kern_return_t UserSendCDB(SCSIType07OutParameters command, SCSIType07InParameters *response);
```

## See Also

### Instance Methods

- [UserDetermineDeviceCharacteristics](userdeterminedevicecharacteristics.md)
- [UserReportMediumBlockSize](userreportmediumblocksize.md)
- [UserResetDevice](userresetdevice.md)
- [UserResumeServices](userresumeservices.md)
- [UserSuspendServices](usersuspendservices.md)
