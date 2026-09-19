> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype07/userdeterminedevicecharacteristics

# UserDetermineDeviceCharacteristics

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

## Declaration

```objectivec
virtual kern_return_t UserDetermineDeviceCharacteristics(bool *result);
```

## See Also

### Instance Methods

- [UserReportMediumBlockSize](userreportmediumblocksize.md)
- [UserResetDevice](userresetdevice.md)
- [UserResumeServices](userresumeservices.md)
- [UserSendCDB](usersendcdb.md)
- [UserSuspendServices](usersuspendservices.md)
