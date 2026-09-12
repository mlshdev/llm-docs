> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waendpoint/performanceforecast](https://developer.apple.com/documentation/wifiaware/waendpoint/performanceforecast)

# performanceForecast

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The forecasted performance for connections setup to the remote device, per WAPerformanceMode.

## Declaration

```swift
let performanceForecast: [WAPerformanceMode : WAPerformanceForecast]
```

<a id="discussion"></a>

## Discussion

This estimation makes certain worst case assumptions about the remote device when calculating performance. A more accurate performance report is available though WAPerformanceReport after a connection is setup. Returns an empty dictionary if the forecast cannot be estimated.
