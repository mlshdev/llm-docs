> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapublisherlistener/datapathparameters](https://developer.apple.com/documentation/wifiaware/wapublisherlistener/datapathparameters)

# WAPublisherListener.DatapathParameters

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The parameter that sets the initial Wi-Fi Aware data path configuration for any devices that are connected.

## Declaration

```swift
struct DatapathParameters
```

<a id="overview"></a>

## Overview

The `DatapathParameters` is an optional “`datapath:`” component of the `.wifiAware()` instruction to a `NetworkListener`. If you don’t set a specific parameter, then the system applies the default parameters with bulk performance mode.

The code below is an example of how to set a data path configuration:

```swift
NetworkListener(for: .wifiAware( .connecting(to:service,  from:.selected(devices)) datapath: .defaults) )
```

> **Important**

> Each service must have the same [WAPerformanceMode](../waperformancemode.md) on both the `NetworkBrowser` (subscriber) and `NetworkListener` (publisher) sides of the connection, or the resulting performance behavior is undefined. If not specified, the performance mode defaults to [WAPerformanceMode.bulk](../waperformancemode/bulk.md) on both sides.

## Topics

### Setting performance modes

- [defaults](datapathparameters/defaults.md): The property that configures default parameters that prioritize bulk throughput, power consumption, and other concurrent Wi-Fi use cases.
- [realtime](datapathparameters/realtime.md): Parameters that prioritize latency at the expense of throughput, power consumption, and other concurrent Wi-Fi use cases and devices.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Publisher

- [WAPublisherListener](../wapublisherlistener.md): Configures a network listener to publish a service over Wi-Fi Aware and accept incoming connections from paired devices.
- [WAPublisherListener.Action](action.md): The structure that configures the Wi-Fi Aware publisher operation that the network listener performs.
- [WAPublisherListener.Devices](devices.md): The structure that determines the devices to connect to.
