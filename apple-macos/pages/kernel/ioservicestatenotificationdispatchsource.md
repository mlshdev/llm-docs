> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicestatenotificationdispatchsource](https://developer.apple.com/documentation/kernel/ioservicestatenotificationdispatchsource)

# IOServiceStateNotificationDispatchSource

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Class  
**Availability:** DriverKit 21.0+ · macOS 12.0+

## Declaration

```objectivec
class IOServiceStateNotificationDispatchSource : IODispatchSource
```

```objectivec
class IOServiceStateNotificationDispatchSource : IODispatchSource, IOServiceStateNotificationDispatchSourceInterface
```

## Topics

### Instance Methods

- [Cancel](https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/cancel)
- [Cancel_Impl](ioservicestatenotificationdispatchsource/3753350-cancel_impl.md)
- [Dispatch](ioservicestatenotificationdispatchsource/3753355-dispatch.md)
- [SetEnableWithCompletion](https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/setenablewithcompletion)
- [SetEnableWithCompletion_Impl](ioservicestatenotificationdispatchsource/3753356-setenablewithcompletion_impl.md)
- [SetHandler](ioservicestatenotificationdispatchsource/3753357-sethandler.md)
- [SetHandler](https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/sethandler)
- [SetHandler_Impl](ioservicestatenotificationdispatchsource/3753358-sethandler_impl.md)
- [StateNotificationBegin](ioservicestatenotificationdispatchsource/3753360-statenotificationbegin.md)
- [StateNotificationBegin](https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/statenotificationbegin)
- [StateNotificationBegin_Impl](ioservicestatenotificationdispatchsource/3753361-statenotificationbegin_impl.md)
- [StateNotificationReady](ioservicestatenotificationdispatchsource/3753363-statenotificationready.md)
- [StateNotificationReady](https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/statenotificationready)
- [free](ioservicestatenotificationdispatchsource/3753366-free.md)
- [getMetaClass](ioservicestatenotificationdispatchsource/3753367-getmetaclass.md)
- [init](ioservicestatenotificationdispatchsource/3753368-init.md)

### Type Methods

- [Create](ioservicestatenotificationdispatchsource/3753351-create.md)
- [Create_Call](ioservicestatenotificationdispatchsource/3753352-create_call.md)
- [Create_Impl](ioservicestatenotificationdispatchsource/3753353-create_impl.md)
- [Create_Invoke](ioservicestatenotificationdispatchsource/3753354-create_invoke.md)
- [SetHandler_Invoke](ioservicestatenotificationdispatchsource/3753359-sethandler_invoke.md)
- [StateNotificationBegin_Invoke](ioservicestatenotificationdispatchsource/3753362-statenotificationbegin_invoke.md)
- [StateNotificationReady_Invoke](ioservicestatenotificationdispatchsource/4519998-statenotificationready_invoke.md)
- [StateNotificationReady_Invoke](ioservicestatenotificationdispatchsource/4519999-statenotificationready_invoke.md)

## Relationships

### Inherits From

- [IODispatchSource](https://developer.apple.com/documentation/driverkit/iodispatchsource)
- [IODispatchSource](iodispatchsource.md)
- [IOServiceStateNotificationDispatchSourceInterface](ioservicestatenotificationdispatchsourceinterface.md)
