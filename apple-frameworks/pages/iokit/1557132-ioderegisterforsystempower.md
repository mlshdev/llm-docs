> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557132-ioderegisterforsystempower](https://developer.apple.com/documentation/iokit/1557132-ioderegisterforsystempower)

# IODeregisterForSystemPower

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Disconnects the caller from the Root Power Domain IOService after receiving system power state change notifications. (Caller must also destroy the IONotificationPortRef returned from IORegisterForSystemPower.)

## Declaration

```objectivec
IOReturn IODeregisterForSystemPower(io_object_t *notifier);
```

## Parameters

- `notifier`: The object returned from IORegisterForSystemPower.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or an error condition if request failed.

## See Also

### Notifications

- [IOAllowPowerChange](1557064-ioallowpowerchange.md): The caller acknowledges notification of a power state change on a device it has registered for notifications for via IORegisterForSystemPower or IORegisterApp.
- [IOCancelPowerChange](1557115-iocancelpowerchange.md): The caller denies an idle system sleep power state change.
- [IODeregisterApp](1557129-ioderegisterapp.md): Disconnects the caller from an IOService after receiving power state change notifications from the IOService. (Caller must also release IORegisterApp's return io_connect_t and returned IONotificationPortRef for complete clean-up).
- [IORegisterApp](1557102-ioregisterapp.md): Deprecated. Connects the caller to an IOService for the purpose of receiving power state change notifications for the device controlled by the IOService.
- [IORegisterForSystemPower](1557114-ioregisterforsystempower.md): Connects the caller to the Root Power Domain IOService for the purpose of receiving sleep & wake notifications for the system. Does not provide system shutdown and restart notifications.
