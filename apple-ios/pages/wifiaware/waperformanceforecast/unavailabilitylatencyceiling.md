> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformanceforecast/unavailabilitylatencyceiling](https://developer.apple.com/documentation/wifiaware/waperformanceforecast/unavailabilitylatencyceiling)

# unavailabilityLatencyCeiling

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The highest forecasted packet latency due to this device’s unavailability.

## Declaration

```swift
let unavailabilityLatencyCeiling: Duration?
```

<a id="discussion"></a>

## Discussion

This only considers the latency caused by time periods where this local device is not able to communicate to the other device via Wi-Fi Aware. Additional latency can be caused by channel or RF conditions.
