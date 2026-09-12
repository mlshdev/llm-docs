> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/response/source](https://developer.apple.com/documentation/mapkit/mkdirections/response/source)

# source (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The start point of the route.

## Declaration

```swift
var source: MKMapItem { get }
```

<a id="Discussion"></a>

## Discussion

The item in this property may contain additional details that aren’t in the original item you use to create the [MKDirections.Request](../request.md) object.

## See Also

### Getting the end points

- [destination](destination.md): The end point of the route.

# source (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The start point of the route.

## Declaration

```objectivec
@property (nonatomic, readonly) MKMapItem * source;
```

<a id="Discussion"></a>

## Discussion

The item in this property may contain additional details that aren’t in the original item you use to create the [MKDirectionsRequest](../request.md) object.

## See Also

### Getting the end points

- [destination](destination.md): The end point of the route.
