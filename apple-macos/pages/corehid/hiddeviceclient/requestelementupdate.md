> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/requestelementupdate](https://developer.apple.com/documentation/corehid/hiddeviceclient/requestelementupdate)

# HIDDeviceClient.RequestElementUpdate

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A request to pull the current value from a list of HID elements

## Declaration

```swift
struct RequestElementUpdate
```

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

Provide this structure to [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md) to request the current values for a list of elements. In most cases, this triggers a get report request to the device for all of the reports containing elements in the provided element list.

## Topics

### Initializers

- [init(elements:pollDevice:)](requestelementupdate/init%28elements_polldevice_%29.md): Creates a request element update.

### Instance Properties

- [elements](requestelementupdate/elements.md): The elements used to request updates.
- [pollDevice](requestelementupdate/polldevice.md): Whether the device should be polled for new updates.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [HIDElementUpdate](../hidelementupdate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Update element values

- [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md): Provide new update values for, or request current values from, lists of elements.
- [HIDDeviceClient.ProvideElementUpdate](provideelementupdate.md): A structure that provides values for a list of HID elements.
- [HIDDeviceClient.HIDElementUpdateResult](hidelementupdateresult.md): A class to hold the results of an element update.
