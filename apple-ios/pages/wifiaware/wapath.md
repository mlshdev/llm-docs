> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapath](https://developer.apple.com/documentation/wifiaware/wapath)

# WAPath

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A representation of the current Wi-Fi Aware path.

## Declaration

```swift
struct WAPath
```

## Topics

### Getting a connection endpoint

- [endpoint](wapath/endpoint.md): The Wi-Fi Aware endpoint that’s connected.

### Getting a current performance

- [performance](wapath/performance.md): The current performance metrics for the Wi-Fi Aware data path.

### Getting path metrics

- [durationActive](wapath/durationactive.md): A property that indicates a cumulative duration data path is connected on this Wi-Fi Aware path.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connection performance

- [NWPath](https://developer.apple.com/documentation/network/nwpath): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [WAPerformanceMode](waperformancemode.md): The performance mode that indicates what performance criterion to prioritize.
- [WAAccessCategory](waaccesscategory.md): The underling quality-of-service (QoS) the Wi-Fi layer uses to transmit data packets from a connection over the air.
- [WAPerformanceReport](waperformancereport.md): The current performance state of the data path.
