> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopmsystemcapabilitychangeparameters/1499643-notifyref](https://developer.apple.com/documentation/iokit/iopmsystemcapabilitychangeparameters/1499643-notifyref)

# notifyRef

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

An identifier for this message notification. Clients with pending I/O can signal completion by calling `allowPowerChange()` with this value as the argument. Clients that are able to process the notification synchronously should ignore this field.

## Declaration

```objectivec
uint32_t notifyRef;
```

## See Also

### Fields

- [maxWaitForReply](1499937-maxwaitforreply.md): A return value to the caller indicating the maximum time in microseconds to wait for the `allowPowerChange()` call. The default value is zero, which indicates the client processing has finished, and power management should not wait for an `allowPowerChange()` call.
- [changeFlags](1499956-changeflags.md): Flags will be set to indicate whether the notification precedes the capability change (`kIOPMSystemCapabilityWillChange`), or after the capability change has occurred (`kIOPMSystemCapabilityDidChange`).
- [\__reserved1](1810535-_reserved1.md): Set to zero.
- [fromCapabilities](1499569-fromcapabilities.md): The system capabilities at the start of the transition.
- [toCapabilities](1499602-tocapabilities.md): The system capabilities at the end of the transition.
- [\__reserved2](1810631-_reserved2.md): Set to zero.
