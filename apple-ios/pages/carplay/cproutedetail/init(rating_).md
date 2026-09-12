> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(rating:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(rating:))

# init(rating:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for a route rating.

## Declaration

```swift
convenience init(rating: Double)
```

## Parameters

- `rating`: The route rating from 0.0 to 5.0. Values outside this range will be clamped. Higher ratings indicate better quality routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the route rating

<a id="discussion"></a>

## Discussion

Use this method to display a user-generated or quality rating for the route. The rating can represent various quality metrics such as road conditions, scenic value, or overall route quality.

Route ratings help users select routes based on quality assessments beyond just time and distance. The system displays this as a rating value with appropriate visual indicators. Values are clamped to the 0.0-5.0 range to match common rating systems.

> **Note**

> Rating methodologies may vary by app. Consider providing information about what the rating represents (e.g., road quality, scenic views, user reviews) in your app’s documentation.

# routeDetailWithRating: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for a route rating.

## Declaration

```objectivec
+ (instancetype) routeDetailWithRating:(double) rating;
```

## Parameters

- `rating`: The route rating from 0.0 to 5.0. Values outside this range will be clamped. Higher ratings indicate better quality routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the route rating

<a id="discussion"></a>

## Discussion

Use this method to display a user-generated or quality rating for the route. The rating can represent various quality metrics such as road conditions, scenic value, or overall route quality.

Route ratings help users select routes based on quality assessments beyond just time and distance. The system displays this as a rating value with appropriate visual indicators. Values are clamped to the 0.0-5.0 range to match common rating systems.

> **Note**

> Rating methodologies may vary by app. Consider providing information about what the rating represents (e.g., road quality, scenic views, user reviews) in your app’s documentation.
