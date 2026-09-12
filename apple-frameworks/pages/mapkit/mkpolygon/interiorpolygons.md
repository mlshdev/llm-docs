> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygon/interiorpolygons](https://developer.apple.com/documentation/mapkit/mkpolygon/interiorpolygons)

# interiorPolygons (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The array of polygons that nest inside the enclosing polygon.

## Declaration

```swift
var interiorPolygons: [MKPolygon]? { get }
```

<a id="Discussion"></a>

## Discussion

When the screen renders a polygon, the renderer masks the area that any interior polygons occupy so they aren’t part of the polygon.

# interiorPolygons (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The array of polygons that nest inside the enclosing polygon.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSArray<MKPolygon *> * interiorPolygons;
```

<a id="Discussion"></a>

## Discussion

When the screen renders a polygon, the renderer masks the area that any interior polygons occupy so they aren’t part of the polygon.
