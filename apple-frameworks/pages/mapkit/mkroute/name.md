> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/name](https://developer.apple.com/documentation/mapkit/mkroute/name)

# name (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The assigned name for the route.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

The framework localizes the string in this property according to the user’s language preferences. You can display this string to the user from your app’s user interface so that the user can distinguish one route from another.

The string itself describes the route using one of the route’s significant features. For example, a route that uses a major highway for a significant portion of the route might use that highway for its name.

## See Also

### Getting additional route details

- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.

# name (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The assigned name for the route.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The framework localizes the string in this property according to the user’s language preferences. You can display this string to the user from your app’s user interface so that the user can distinguish one route from another.

The string itself describes the route using one of the route’s significant features. For example, a route that uses a major highway for a significant portion of the route might use that highway for its name.

## See Also

### Getting additional route details

- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [advisoryNotices](advisorynotices.md): An array of advisory notice strings for the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
