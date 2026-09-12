> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(warning:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(warning:))

# init(warning:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for route warnings.

## Declaration

```swift
convenience init(warning: String)
```

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing a route warning

<a id="discussion"></a>

## Discussion

Use this method to display important warnings or alerts about conditions along the route. This helps users prepare for challenging or hazardous conditions they may encounter.

Warnings draw attention to significant issues that may affect route safety or accessibility. Use this for critical information that users should be aware of before selecting a route.

> **Note**

> Reserve warnings for significant conditions. Use the tintColor property to set an appropriate color (such as red or orange) to ensure warnings are visually prominent. Consider localizing warning messages for international users.

# routeDetailWithWarning: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for route warnings.

## Declaration

```objectivec
+ (instancetype) routeDetailWithWarning:(NSString *) warning;
```

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing a route warning

<a id="discussion"></a>

## Discussion

Use this method to display important warnings or alerts about conditions along the route. This helps users prepare for challenging or hazardous conditions they may encounter.

Warnings draw attention to significant issues that may affect route safety or accessibility. Use this for critical information that users should be aware of before selecting a route.

> **Note**

> Reserve warnings for significant conditions. Use the tintColor property to set an appropriate color (such as red or orange) to ensure warnings are visually prominent. Consider localizing warning messages for international users.
