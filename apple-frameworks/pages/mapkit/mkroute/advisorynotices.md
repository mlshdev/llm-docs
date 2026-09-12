> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/advisorynotices](https://developer.apple.com/documentation/mapkit/mkroute/advisorynotices)

# advisoryNotices (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An array of advisory notice strings for the route.

## Declaration

```swift
var advisoryNotices: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](../../foundation/nsstring.md) objects. The framework localizes each string according to the user’s language preferences. The strings contain additional information that’s important for the user to know about the route. For example, a string might note the closing of a portion of the route during the winter or after big storms.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.

# advisoryNotices (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An array of advisory notice strings for the route.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * advisoryNotices;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](../../foundation/nsstring.md) objects. The framework localizes each string according to the user’s language preferences. The strings contain additional information that’s important for the user to know about the route. For example, a string might note the closing of a portion of the route during the winter or after big storms.

## See Also

### Getting additional route details

- [name](name.md): The assigned name for the route.
- [hasHighways](hashighways.md): A Boolean value that indicates whether the route contains highways.
- [hasTolls](hastolls.md): A Boolean value that indicates whether the route has tolls.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
