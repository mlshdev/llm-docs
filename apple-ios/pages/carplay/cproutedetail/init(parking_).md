> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(parking:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(parking:))

# init(parking:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information describing parking at the destination.

## Declaration

```swift
convenience init(parking: String)
```

## Parameters

- `parking`: A localized string describing parking at the destination. Must not be nil.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the parking information.

<a id="discussion"></a>

## Discussion

Use this method to surface parking-related details (availability, estimated cost, distance to destination) so users can factor parking into their route selection.

Parking information is displayed alongside other route details. Keep the string concise and localized so it reads clearly in the available space.

# routeDetailWithParking: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information describing parking at the destination.

## Declaration

```objectivec
+ (instancetype) routeDetailWithParking:(NSString *) parking;
```

## Parameters

- `parking`: A localized string describing parking at the destination. Must not be nil.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the parking information.

<a id="discussion"></a>

## Discussion

Use this method to surface parking-related details (availability, estimated cost, distance to destination) so users can factor parking into their route selection.

Parking information is displayed alongside other route details. Keep the string concise and localized so it reads clearly in the available space.
