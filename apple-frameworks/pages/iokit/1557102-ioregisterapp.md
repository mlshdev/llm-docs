> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557102-ioregisterapp](https://developer.apple.com/documentation/iokit/1557102-ioregisterapp)

# IORegisterApp

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Connects the caller to an IOService for the purpose of receiving power state change notifications for the device controlled by the IOService.

## Declaration

```objectivec
io_connect_t IORegisterApp(void *refcon, io_service_t theDriver, IONotificationPortRef *thePortRef, IOServiceInterestCallback callback, io_object_t *notifier);
```

## Parameters

- `refcon`: Data returned on power state change notifications and not used by the kernel.
- `theDriver`: Representation of the IOService, probably from IOServiceGetMatchingService.
- `thePortRef`: Pointer to a port on which the caller will receive power state change notifications. The port is allocated by the calling application.
- `callback`: A c-function which is called during the notification.
- `notifier`: Pointer to a notifier which caller must keep and pass to subsequent call to IODeregisterApp.

<a id="return_value"></a>

## Return Value

Returns a io_connect_t session for the IOService or MACH_PORT_NULL if request failed. Caller must close return value via IOServiceClose() after calling IODeregisterApp on the notifier argument.

<a id="discussion"></a>

## Discussion

IORegisterApp requires that the IOService of interest implement an IOUserClient. In addition, that IOUserClient must implement the allowPowerChange and cancelPowerChange methods defined in IOPMLibDefs.h. If you're interested in receiving power state notifications from a device without an IOUserClient, try using IOServiceAddInterestNotification with interest type gIOGeneralInterest instead.

## See Also

### Notifications

- [IOAllowPowerChange](1557064-ioallowpowerchange.md): The caller acknowledges notification of a power state change on a device it has registered for notifications for via IORegisterForSystemPower or IORegisterApp.
- [IOCancelPowerChange](1557115-iocancelpowerchange.md): The caller denies an idle system sleep power state change.
- [IODeregisterApp](1557129-ioderegisterapp.md): Disconnects the caller from an IOService after receiving power state change notifications from the IOService. (Caller must also release IORegisterApp's return io_connect_t and returned IONotificationPortRef for complete clean-up).
- [IODeregisterForSystemPower](1557132-ioderegisterforsystempower.md): Disconnects the caller from the Root Power Domain IOService after receiving system power state change notifications. (Caller must also destroy the IONotificationPortRef returned from IORegisterForSystemPower.)
- [IORegisterForSystemPower](1557114-ioregisterforsystempower.md): Connects the caller to the Root Power Domain IOService for the purpose of receiving sleep & wake notifications for the system. Does not provide system shutdown and restart notifications.
