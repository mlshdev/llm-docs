> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/slice](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/slice)

# CTSlicingManager.Slice

**Framework:** Core Telephony  
**Kind:** Structure  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

Information about an active network slice.

## Declaration

```swift
struct Slice
```

<a id="Overview"></a>

## Overview

A `Slice` represents an active network slice configuration, including the app category it serves, the traffic class it uses, and the network interface handling the traffic.

Use the [activeSlices](activeslices.md) property to retrieve information about currently active slices on the device.

## Topics

### Representing slice properties

- [appCategory](slice/appcategory.md): An application category associated with this network slice.
- [trafficClass](slice/trafficclass.md): A traffic class that routes traffic through this network slice.
- [networkInterfaceName](slice/networkinterfacename.md): A network interface name associated with the slice.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
