> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopmsystemcapabilitychangeparameters](https://developer.apple.com/documentation/iokit/iopmsystemcapabilitychangeparameters)

# IOPMSystemCapabilityChangeParameters

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A structure describing a system capability change.

## Declaration

```objectivec
struct IOPMSystemCapabilityChangeParameters {
    ...
};
```

<a id="discussion"></a>

## Discussion

A system capability change is a system level transition from a set of system capabilities to a new set of system capabilities. Power management sends a `kIOMessageSystemCapabilityChange` message and provides this structure as the message data (by reference) to `gIOPriorityPowerStateInterest` clients when system capability changes.

## Topics

### Fields

- [notifyRef](iopmsystemcapabilitychangeparameters/1499643-notifyref.md): An identifier for this message notification. Clients with pending I/O can signal completion by calling `allowPowerChange()` with this value as the argument. Clients that are able to process the notification synchronously should ignore this field.
- [maxWaitForReply](iopmsystemcapabilitychangeparameters/1499937-maxwaitforreply.md): A return value to the caller indicating the maximum time in microseconds to wait for the `allowPowerChange()` call. The default value is zero, which indicates the client processing has finished, and power management should not wait for an `allowPowerChange()` call.
- [changeFlags](iopmsystemcapabilitychangeparameters/1499956-changeflags.md): Flags will be set to indicate whether the notification precedes the capability change (`kIOPMSystemCapabilityWillChange`), or after the capability change has occurred (`kIOPMSystemCapabilityDidChange`).
- [\__reserved1](iopmsystemcapabilitychangeparameters/1810535-_reserved1.md): Set to zero.
- [fromCapabilities](iopmsystemcapabilitychangeparameters/1499569-fromcapabilities.md): The system capabilities at the start of the transition.
- [toCapabilities](iopmsystemcapabilitychangeparameters/1499602-tocapabilities.md): The system capabilities at the end of the transition.
- [\__reserved2](iopmsystemcapabilitychangeparameters/1810631-_reserved2.md): Set to zero.
