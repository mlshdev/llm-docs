> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(hov:)-6ivii](https://developer.apple.com/documentation/carplay/cproutedetail/init(hov:)-6ivii)

# init(hov:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for High-Occupancy Vehicle (HOV) lane access.

## Declaration

```swift
convenience init(hov hovInfo: String)
```

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing HOV lane information

<a id="discussion"></a>

## Discussion

Use this method to display information about HOV lane eligibility and requirements for the route. This helps users understand whether they can use faster HOV lanes based on vehicle occupancy.

HOV information is valuable for users planning carpools or understanding time savings from using HOV lanes. Display requirements such as minimum passenger count or time restrictions.

> **Note**

> Ensure HOV information is accurate for the specific route and time of day, as restrictions often vary by time and location.

# routeDetailWithHOV: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for High-Occupancy Vehicle (HOV) lane access.

## Declaration

```objectivec
+ (instancetype) routeDetailWithHOV:(NSString *) hovInfo;
```

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing HOV lane information

<a id="discussion"></a>

## Discussion

Use this method to display information about HOV lane eligibility and requirements for the route. This helps users understand whether they can use faster HOV lanes based on vehicle occupancy.

HOV information is valuable for users planning carpools or understanding time savings from using HOV lanes. Display requirements such as minimum passenger count or time restrictions.

> **Note**

> Ensure HOV information is accurate for the specific route and time of day, as restrictions often vary by time and location.
