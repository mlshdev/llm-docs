> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userinitializedevicesupport](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/userinitializedevicesupport)

# UserInitializeDeviceSupport

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Performs enumeration-time initializations in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t UserInitializeDeviceSupport(bool *result);
```

<a id="Discussion"></a>

## Discussion

The kernel calls this user space method at enumeration time. Use this callback to perform any initializations your DriverKit extension (dext) needs to perform.

## See Also

### Managing the device

- [UserResetDevice](userresetdevice.md): Performs a bus reset of the external drive.
