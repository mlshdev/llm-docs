> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/routepreference](https://developer.apple.com/documentation/mapkit/mkdirections/routepreference)

# MKDirections.RoutePreference (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Options that modify how the framework selects routes when calculating directions.

## Declaration

```swift
enum RoutePreference
```

## Topics

### Route selection options

- [MKDirections.RoutePreference.any](routepreference/any.md): The option that specifies any available route.
- [MKDirections.RoutePreference.avoid](routepreference/avoid.md): The option that requests the framework avoid certain routes.

### Initializers

- [init(rawValue:)](routepreference/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a directions object

- [init(request:)](init%28request_%29.md): Creates and returns a directions object using the specified request.
- [MKDirections.Request](request.md): The start and end points of a route, along with the planned mode of transportation.

# MKDirectionsRoutePreference (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that modify how the framework selects routes when calculating directions.

## Declaration

```objectivec
enum MKDirectionsRoutePreference : NSInteger;
```

## Topics

### Route selection options

- [MKDirectionsRoutePreferenceAny](routepreference/any.md): The option that specifies any available route.
- [MKDirectionsRoutePreferenceAvoid](routepreference/avoid.md): The option that requests the framework avoid certain routes.

## See Also

### Creating a directions object

- [initWithRequest:](init%28request_%29.md): Creates and returns a directions object using the specified request.
- [MKDirectionsRequest](request.md): The start and end points of a route, along with the planned mode of transportation.
