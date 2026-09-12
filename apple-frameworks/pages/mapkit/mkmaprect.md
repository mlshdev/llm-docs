> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect](https://developer.apple.com/documentation/mapkit/mkmaprect)

# MKMapRect (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangular area on a two-dimensional map projection.

## Declaration

```swift
struct MKMapRect
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, what you get is a two-dimensional version of a map where longitude lines appear to be parallel. Such maps are often used to show the entire surface of the globe all at once. An `MKMapRect` data structure represents a rectangular area as seen on this two-dimensional map.

## Topics

### Creating a map rectangle

- [init()](mkmaprect/init%28%29.md): Creates the rectangle with an empty region.
- [init(origin:size:)](mkmaprect/init%28origin_size_%29.md): Creates the map rectangle with the specified point and size.
- [init(x:y:width:height:)](mkmaprect/init%28x_y_width_height_%29.md): Creates a new map rectangle structure from the specified values.
- [init(\_:)](mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.

### Getting standard map rectangles

- [null](mkmaprect/null.md): The null map rectangle.
- [world](mkmaprect/world.md): The map rectangle that represents the world in the two-dimensional map projection.

### Getting the rectangle coordinates

- [origin](mkmaprect/origin.md): The origin point of the rectangle.
- [size](mkmaprect/size.md): The width and height of the rectangle, starting from the origin point.

### Getting the boundaries

- [minX](mkmaprect/minx.md): Returns the minimum x-axis value of the specified rectangle.
- [minY](mkmaprect/miny.md): Returns the minimum y-axis value of the specified rectangle.
- [midX](mkmaprect/midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [midY](mkmaprect/midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [maxX](mkmaprect/maxx.md): Returns the maximum x-axis value of the specified rectangle.
- [maxY](mkmaprect/maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [width](mkmaprect/width.md): Returns the width of the map rectangle.
- [height](mkmaprect/height.md): Returns the height of the map rectangle.

### Comparing rectangles

- [isNull](mkmaprect/isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect(\_:\_:)](mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [isEmpty](mkmaprect/isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [spans180thMeridian](mkmaprect/spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [remainder](mkmaprect/remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

### Intersecting the rectangle

- [contains(\_:)](mkmaprect/contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [contains(\_:)](mkmaprect/contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.
- [intersects(\_:)](mkmaprect/intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.

### Modifying the rectangle

- [union(\_:)](mkmaprect/union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [intersection(\_:)](mkmaprect/intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [insetBy(dx:dy:)](mkmaprect/insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [offsetBy(dx:dy:)](mkmaprect/offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide(\_:\_:\_:\_:\_:)](mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

### Getting a description of the rectangle

- [MKStringFromMapRect(\_:)](mkstringfrommaprect%28__%29.md): Returns a formatted string for the specified map rectangle.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.

# MKMapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangular area on a two-dimensional map projection.

## Declaration

```objectivec
typedef struct { ... } MKMapRect;
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, what you get is a two-dimensional version of a map where longitude lines appear to be parallel. Such maps are often used to show the entire surface of the globe all at once. An `MKMapRect` data structure represents a rectangular area as seen on this two-dimensional map.

## Topics

### Creating a map rectangle

- [MKMapRectMake](mkmaprect/init%28x_y_width_height_%29.md): Creates a new map rectangle structure from the specified values.
- [MKCoordinateRegionForMapRect](mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.

### Getting standard map rectangles

- [MKMapRectNull](mkmaprect/null.md): The null map rectangle.
- [MKMapRectWorld](mkmaprect/world.md): The map rectangle that represents the world in the two-dimensional map projection.

### Getting the rectangle coordinates

- [origin](mkmaprect/origin.md): The origin point of the rectangle.
- [size](mkmaprect/size.md): The width and height of the rectangle, starting from the origin point.

### Getting the boundaries

- [MKMapRectGetMinX](mkmaprect/minx.md): Returns the minimum x-axis value of the specified rectangle.
- [MKMapRectGetMinY](mkmaprect/miny.md): Returns the minimum y-axis value of the specified rectangle.
- [MKMapRectGetMidX](mkmaprect/midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [MKMapRectGetMidY](mkmaprect/midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [MKMapRectGetMaxX](mkmaprect/maxx.md): Returns the maximum x-axis value of the specified rectangle.
- [MKMapRectGetMaxY](mkmaprect/maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [MKMapRectGetWidth](mkmaprect/width.md): Returns the width of the map rectangle.
- [MKMapRectGetHeight](mkmaprect/height.md): Returns the height of the map rectangle.

### Comparing rectangles

- [MKMapRectIsNull](mkmaprect/isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect](mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [MKMapRectIsEmpty](mkmaprect/isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [MKMapRectSpans180thMeridian](mkmaprect/spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [MKMapRectRemainder](mkmaprect/remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

### Intersecting the rectangle

- [MKMapRectContainsPoint](mkmaprect/contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [MKMapRectContainsRect](mkmaprect/contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.
- [MKMapRectIntersectsRect](mkmaprect/intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.

### Modifying the rectangle

- [MKMapRectUnion](mkmaprect/union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [MKMapRectIntersection](mkmaprect/intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [MKMapRectInset](mkmaprect/insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectOffset](mkmaprect/offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide](mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

### Getting a description of the rectangle

- [MKStringFromMapRect](mkstringfrommaprect%28__%29.md): Returns a formatted string for the specified map rectangle.

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.
