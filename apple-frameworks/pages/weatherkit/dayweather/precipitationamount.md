> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dayweather/precipitationamount](https://developer.apple.com/documentation/weatherkit/dayweather/precipitationamount)

# precipitationAmount

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ · watchOS 9.0+ (deprecated in 11.0)

The amount of liquid precipitation for the day.

> Use precipitationAmountByType

## Declaration

```swift
@backDeployed(before: iOS 16.4, macOS 13.3, tvOS 16.4, watchOS 9.4)
var precipitationAmount: Measurement<UnitLength> { get }
```
