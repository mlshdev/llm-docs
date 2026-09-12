> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/init(x:y:width:height:)](https://developer.apple.com/documentation/mapkit/mkmaprect/init(x:y:width:height:))

# init(x:y:width:height:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new map rectangle structure from the specified values.

## Declaration

```swift
init(x: Double, y: Double, width: Double, height: Double)
```

## Parameters

- `x`: The point along the east-west axis of the map projection to use for the origin.
- `y`: The point along the north-south axis of the map projection to use for the origin.
- `width`: The width of the rectangle (measured using map points).
- `height`: The height of the rectangle (measured using map points).

<a id="return-value"></a>

## Return Value

A map rectangle with the specified values.

## See Also

### Creating a map rectangle

- [init()](init%28%29.md): Creates the rectangle with an empty region.
- [init(origin:size:)](init%28origin_size_%29.md): Creates the map rectangle with the specified point and size.
- [init(\_:)](../mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.

# MKMapRectMake (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new map rectangle structure from the specified values.

## Declaration

```objectivec
static MKMapRect MKMapRectMake(double x, double y, double width, double height);
```

## Parameters

- `x`: The point along the east-west axis of the map projection to use for the origin.
- `y`: The point along the north-south axis of the map projection to use for the origin.
- `width`: The width of the rectangle (measured using map points).
- `height`: The height of the rectangle (measured using map points).

<a id="return-value"></a>

## Return Value

A map rectangle with the specified values.

## See Also

### Creating a map rectangle

- [MKCoordinateRegionForMapRect](../mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
