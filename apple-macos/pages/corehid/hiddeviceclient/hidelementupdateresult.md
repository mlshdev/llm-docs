> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/hidelementupdateresult](https://developer.apple.com/documentation/corehid/hiddeviceclient/hidelementupdateresult)

# HIDDeviceClient.HIDElementUpdateResult

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A class to hold the results of an element update.

## Declaration

```swift
struct HIDElementUpdateResult
```

<a id="overview"></a>

## Overview

This class is received as the return value from [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md). The results of the transactions can be received by subscripting the results object with [HIDDeviceClient.ProvideElementUpdate](provideelementupdate.md) and [HIDDeviceClient.RequestElementUpdate](requestelementupdate.md) originally passed to [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md).

For an example, see [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md).

## Topics

### Subscripts

- [subscript(\_:)](hidelementupdateresult/subscript%28__%29-56db0.md): Receive the result of a element update.
- [subscript(\_:)](hidelementupdateresult/subscript%28__%29-7mvq2.md): Receive the result of a request element update.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Update element values

- [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md): Provide new update values for, or request current values from, lists of elements.
- [HIDDeviceClient.RequestElementUpdate](requestelementupdate.md): A request to pull the current value from a list of HID elements
- [HIDDeviceClient.ProvideElementUpdate](provideelementupdate.md): A structure that provides values for a list of HID elements.
