> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/response/routes](https://developer.apple.com/documentation/mapkit/mkdirections/response/routes)

# routes (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An array of route objects representing the directions between the start and end points.

## Declaration

```swift
var routes: [MKRoute] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [MKRoute](../../mkroute.md) objects, each of which represents a possible set of directions for the user to follow. If you don’t request alternate routes in the original directions request, this array contains at most one object.

Each route object contains geometry information that you can use to display that route on your app’s map view. Routes may also contain additional information that’s relevant to that particular route, such as the expected travel time and any trip advisory notices.

# routes (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An array of route objects representing the directions between the start and end points.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<MKRoute *> * routes;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [MKRoute](../../mkroute.md) objects, each of which represents a possible set of directions for the user to follow. If you don’t request alternate routes in the original directions request, this array contains at most one object.

Each route object contains geometry information that you can use to display that route on your app’s map view. Routes may also contain additional information that’s relevant to that particular route, such as the expected travel time and any trip advisory notices.
