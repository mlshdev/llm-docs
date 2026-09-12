> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/etaresponse/destination](https://developer.apple.com/documentation/mapkit/mkdirections/etaresponse/destination)

# destination (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The end point of the route.

## Declaration

```swift
var destination: MKMapItem { get }
```

<a id="Discussion"></a>

## Discussion

The item in this property may contain additional details that aren’t in the original item you use to create the [MKDirections.Request](../request.md) object.

## See Also

### Getting the end points

- [source](source.md): The start point of the route.

# destination (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The end point of the route.

## Declaration

```objectivec
@property (nonatomic, readonly) MKMapItem * destination;
```

<a id="Discussion"></a>

## Discussion

The item in this property may contain additional details that aren’t in the original item you use to create the [MKDirectionsRequest](../request.md) object.

## See Also

### Getting the end points

- [source](source.md): The start point of the route.
