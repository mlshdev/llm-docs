> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancemode](https://developer.apple.com/documentation/wifiaware/waperformancemode)

# WAPerformanceMode

**Framework:** Wi-Fi Aware  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The performance mode that indicates what performance criterion to prioritize.

## Declaration

```swift
enum WAPerformanceMode
```

<a id="overview"></a>

## Overview

> **Important**

> Each service must have the same [WAPerformanceMode](waperformancemode.md) on both the `NetworkBrowser` (subscriber) and `NetworkListener` (publisher) sides of the connection, or the performance behavior is undefined. If not specified, the performance mode defaults to [WAPerformanceMode.bulk](waperformancemode/bulk.md) on both sides.

## Topics

### Setting performance modes

- [WAPerformanceMode.bulk](waperformancemode/bulk.md): A mode that prioritizes throughput, power, and support for other concurrent Wi-Fi use cases and devices.
- [WAPerformanceMode.realtime](waperformancemode/realtime.md): A mode that prioritizes latency at the expense of throughput, power, and other concurrent Wi-Fi use cases and devices.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connection performance

- [NWPath](https://developer.apple.com/documentation/network/nwpath): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [WAPath](wapath.md): A representation of the current Wi-Fi Aware path.
- [WAAccessCategory](waaccesscategory.md): The underling quality-of-service (QoS) the Wi-Fi layer uses to transmit data packets from a connection over the air.
- [WAPerformanceReport](waperformancereport.md): The current performance state of the data path.
