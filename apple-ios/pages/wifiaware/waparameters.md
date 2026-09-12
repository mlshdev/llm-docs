> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waparameters](https://developer.apple.com/documentation/wifiaware/waparameters)

# WAParameters

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Parameters configuring a Wi-Fi Aware data path connection.

## Declaration

```swift
struct WAParameters
```

<a id="overview"></a>

## Overview

You can customize Wi-Fi Aware configuration with the parameters passed in the `.wifiAware()` instruction to the `NetworkBrowser` and `NetworkListener`, or via the `.wifiAware:WAParameters?` property on `NWParameters`.

For more information about creating a `NetworkListener`, refer to [WAPublisherListener.DatapathParameters](wapublisherlistener/datapathparameters.md)

> **Important**

> Each service must have the same [WAPerformanceMode](waperformancemode.md) on both the `NetworkBrowser` (subscriber) and `NetworkListener` (publisher) sides of the connection, or the resulting performance behavior is undefined. If not specified, the performance mode defaults to [WAPerformanceMode.bulk](waperformancemode/bulk.md) on both sides.

## Topics

### Setting common configurations

- [defaults](waparameters/defaults.md): The property that configures default parameters that prioritize bulk throughput, power consumption, and other concurrent Wi-Fi use cases.
- [realtime](waparameters/realtime.md): The property that configures parameters that prioritize latency at the expense of throughput, power consumption, and other concurrent Wi-Fi use cases.

### Checking the configured performance mode

- [performanceMode](waparameters/performancemode.md): The initial performance configuration of the data path when connected.
- [init(performanceMode:)](waparameters/init%28performancemode_%29.md): Initializes the parameters with defaults.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameters

- [NWParameters](https://developer.apple.com/documentation/network/nwparameters): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [NWParametersBuilder](https://developer.apple.com/documentation/network/nwparametersbuilder): An opaque class that is responsible for creating and configuring NWParameters based on the parameterized protocol stack.
