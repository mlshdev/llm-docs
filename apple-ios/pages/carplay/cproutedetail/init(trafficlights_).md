> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(trafficlights:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(trafficlights:))

# init(trafficLights:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for the number of traffic lights along the route.

## Declaration

```swift
convenience init(trafficLights: Int)
```

## Parameters

- `trafficLights`: The number of traffic lights along the route. Common values range from 0 to 50+ for typical urban routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the traffic light count

<a id="discussion"></a>

## Discussion

Use this method to display the count of traffic signals that will be encountered along the route. This helps users understand potential stop-and-go traffic patterns and estimate realistic travel time.

Traffic light count provides valuable context for route selection, especially in urban areas where signal timing can significantly impact travel time. Routes with fewer traffic lights may offer smoother travel despite similar distances.

> **Note**

> The count should include all signalized intersections where the route requires stopping or yielding. Consider excluding traffic lights on cross streets that don’t affect the route. This information pairs well with travel time estimates to help users understand route flow.

# routeDetailWithTrafficLights: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for the number of traffic lights along the route.

## Declaration

```objectivec
+ (instancetype) routeDetailWithTrafficLights:(NSUInteger) trafficLights;
```

## Parameters

- `trafficLights`: The number of traffic lights along the route. Common values range from 0 to 50+ for typical urban routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the traffic light count

<a id="discussion"></a>

## Discussion

Use this method to display the count of traffic signals that will be encountered along the route. This helps users understand potential stop-and-go traffic patterns and estimate realistic travel time.

Traffic light count provides valuable context for route selection, especially in urban areas where signal timing can significantly impact travel time. Routes with fewer traffic lights may offer smoother travel despite similar distances.

> **Note**

> The count should include all signalized intersections where the route requires stopping or yielding. Consider excluding traffic lights on cross streets that don’t affect the route. This information pairs well with travel time estimates to help users understand route flow.
