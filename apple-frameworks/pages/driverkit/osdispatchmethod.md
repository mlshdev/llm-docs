> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdispatchmethod](https://developer.apple.com/documentation/driverkit/osdispatchmethod)

# OSDispatchMethod

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef int (*)(class OSMetaClassBase *, struct IORPC) OSDispatchMethod;
```

## See Also

### RPC Support

- [IORPC](iorpc.md)
- [IORPCMessage](iorpcmessage.md)
- [IORPCMessageMach](iorpcmessagemach.md)
- [IORPCMessageErrorReturn](iorpcmessageerrorreturn.md)
- [OSClassLoadInformation](osclassloadinformation.md)
- [OSClassDescription](osclassdescription.md)
- [RPC Message ID](3222959-rpc_message_id.md)
- [RPC Message Types](3222960-rpc_message_types.md)
- [RPC Capabilities](3222961-rpc_capabilities.md)
- [RPC Version](3353062-rpc_version.md)
- [IORPCMessageFromMach](iorpcmessagefrommach.md)
