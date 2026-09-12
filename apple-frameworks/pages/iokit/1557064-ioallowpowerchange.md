> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557064-ioallowpowerchange](https://developer.apple.com/documentation/iokit/1557064-ioallowpowerchange)

# IOAllowPowerChange

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

The caller acknowledges notification of a power state change on a device it has registered for notifications for via IORegisterForSystemPower or IORegisterApp.

## Declaration

```objectivec
IOReturn IOAllowPowerChange(io_connect_t kernelPort, intptr_t notificationID);
```

## Parameters

- `kernelPort`: Port used to communicate to the kernel, from IORegisterApp or IORegisterForSystemPower.
- `notificationID`: A copy of the notification ID which came as part of the power state change notification being acknowledged.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or an error condition if request failed.

<a id="discussion"></a>

## Discussion

Must be used when handling kIOMessageCanSystemSleep and kIOMessageSystemWillSleep messages from IOPMrootDomain system power. The caller should not call IOAllowPowerChange in response to any messages except for these two.

## See Also

### Notifications

- [IOCancelPowerChange](1557115-iocancelpowerchange.md): The caller denies an idle system sleep power state change.
- [IODeregisterApp](1557129-ioderegisterapp.md): Disconnects the caller from an IOService after receiving power state change notifications from the IOService. (Caller must also release IORegisterApp's return io_connect_t and returned IONotificationPortRef for complete clean-up).
- [IODeregisterForSystemPower](1557132-ioderegisterforsystempower.md): Disconnects the caller from the Root Power Domain IOService after receiving system power state change notifications. (Caller must also destroy the IONotificationPortRef returned from IORegisterForSystemPower.)
- [IORegisterApp](1557102-ioregisterapp.md): Deprecated. Connects the caller to an IOService for the purpose of receiving power state change notifications for the device controlled by the IOService.
- [IORegisterForSystemPower](1557114-ioregisterforsystempower.md): Connects the caller to the Root Power Domain IOService for the purpose of receiving sleep & wake notifications for the system. Does not provide system shutdown and restart notifications.
