> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicenotificationdispatchsource](https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource)

# IOServiceNotificationDispatchSource

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Class  
**Availability:** DriverKit 19.0+ · macOS 10.15.4+

## Declaration

```objectivec
class IOServiceNotificationDispatchSource : IODispatchSource
```

```objectivec
class IOServiceNotificationDispatchSource : IODispatchSource, IOServiceNotificationDispatchSourceInterface
```

## Topics

### Instance Methods

- [Cancel](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/cancel)
- [Cancel_Impl](ioservicenotificationdispatchsource/3538520-cancel_impl.md)
- [CheckForWork](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/checkforwork)
- [CheckForWork_Impl](ioservicenotificationdispatchsource/3538521-checkforwork_impl.md)
- [CopyNextNotification](ioservicenotificationdispatchsource/3538522-copynextnotification.md)
- [CopyNextNotification](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/copynextnotification)
- [CopyNextNotification_Impl](ioservicenotificationdispatchsource/3538523-copynextnotification_impl.md)
- [DeliverNotifications](ioservicenotificationdispatchsource/3538529-delivernotifications.md)
- [Dispatch](ioservicenotificationdispatchsource/3538530-dispatch.md)
- [ServiceNotificationReady](ioservicenotificationdispatchsource/3538531-servicenotificationready.md)
- [ServiceNotificationReady](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/servicenotificationready)
- [SetEnableWithCompletion](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/setenablewithcompletion)
- [SetEnableWithCompletion_Impl](ioservicenotificationdispatchsource/3538533-setenablewithcompletion_impl.md)
- [SetHandler](ioservicenotificationdispatchsource/3538534-sethandler.md)
- [SetHandler](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/sethandler)
- [SetHandler_Impl](ioservicenotificationdispatchsource/3538535-sethandler_impl.md)
- [free](ioservicenotificationdispatchsource/3538537-free.md)
- [getMetaClass](ioservicenotificationdispatchsource/3538538-getmetaclass.md)
- [init](ioservicenotificationdispatchsource/3538539-init.md)

### Type Methods

- [CopyNextNotification_Invoke](ioservicenotificationdispatchsource/3538524-copynextnotification_invoke.md)
- [Create](ioservicenotificationdispatchsource/3538525-create.md)
- [Create_Call](ioservicenotificationdispatchsource/3538526-create_call.md)
- [Create_Impl](ioservicenotificationdispatchsource/3538527-create_impl.md)
- [Create_Invoke](ioservicenotificationdispatchsource/3538528-create_invoke.md)
- [ServiceNotificationReady_Invoke](ioservicenotificationdispatchsource/4519996-servicenotificationready_invoke.md)
- [ServiceNotificationReady_Invoke](ioservicenotificationdispatchsource/4519997-servicenotificationready_invoke.md)
- [SetHandler_Invoke](ioservicenotificationdispatchsource/3538536-sethandler_invoke.md)

## Relationships

### Inherits From

- [IODispatchSource](https://developer.apple.com/documentation/driverkit/iodispatchsource)
- [IODispatchSource](iodispatchsource.md)
- [IOServiceNotificationDispatchSourceInterface](ioservicenotificationdispatchsourceinterface.md)

## See Also

### Notifications

- [IOServiceNotificationDispatchSourceInterface](ioservicenotificationdispatchsourceinterface.md)
- [IONotifier](ionotifier.md): An abstract base class defining common methods for controlling a notification request.
