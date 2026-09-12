> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/interface_event_t/vmnet_interface_packets_available](https://developer.apple.com/documentation/vmnet/interface_event_t/vmnet_interface_packets_available)

# VMNET_INTERFACE_PACKETS_AVAILABLE (Swift)

**Framework:** vmnet  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
static var VMNET_INTERFACE_PACKETS_AVAILABLE: interface_event_t { get }
```

<a id="Discussion"></a>

## Discussion

Event indicating packets are available to be read on the interface.

The `event` dictionary passed in the callback returns the estimated number of packets available to be read using the [vmnet_estimated_packets_available_key](../vmnet_estimated_packets_available_key.md) key.

# VMNET_INTERFACE_PACKETS_AVAILABLE (Objective-C)

**Framework:** vmnet  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```objectivec
VMNET_INTERFACE_PACKETS_AVAILABLE
```

<a id="Discussion"></a>

## Discussion

Event indicating packets are available to be read on the interface.

The `event` dictionary passed in the callback returns the estimated number of packets available to be read using the [vmnet_estimated_packets_available_key](../vmnet_estimated_packets_available_key.md) key.
