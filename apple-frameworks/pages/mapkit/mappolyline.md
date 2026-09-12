> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mappolyline](https://developer.apple.com/documentation/mapkit/mappolyline)

# MapPolyline

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An open polygon overlay consisting of one or more connected line segments.

## Declaration

```swift
struct MapPolyline
```

<a id="overview"></a>

## Overview

Use this view to create map polylines instances in the closure you provide to the `content` parameter in the [Map](map.md) initializers.

## Topics

### Creating a polyline

- [init(\_:)](mappolyline/init%28__%29-93u7w.md): Creates a polyline from polyline you provide.
- [init(\_:)](mappolyline/init%28__%29-5p2kx.md): Creates a polyline that traces the route you provide.
- [init(coordinates:contourStyle:)](mappolyline/init%28coordinates_contourstyle_%29.md): Creates a polyline that traces a path between the given coordinates using the specifed contour style.
- [init(points:contourStyle:)](mappolyline/init%28points_contourstyle_%29.md): Creates a new polyline that traces a path between the provided points using the specifed contour style.

### Styling the polyline

- [stroke(\_:lineWidth:)](mapcontent/stroke%28__linewidth_%29.md): Applies the given shape style to drawn map overlays using the line width you specify.
- [stroke(\_:style:)](mapcontent/stroke%28__style_%29.md): Applies the given shape style to drawn map overlays using the stroke style you specify.
- [stroke(lineWidth:)](mapcontent/stroke%28linewidth_%29.md): Applies the given stoke drawn map overlays using the line width you specify.
- [strokeStyle(style:)](mapcontent/strokestyle%28style_%29.md): Applies the given stroke style to drawn map overlays.
- [MapPolyline.ContourStyle](mappolyline/contourstyle.md): Values that define how MapKit styles lines to represent the contour of the Earth.

### Setting the overlay level

- [mapOverlayLevel(level:)](mapcontent/mapoverlaylevel%28level_%29.md): Specifies the position of overlays relative to other map content.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MapContent](mapcontent.md)

## See Also

### Annotations and overlays

- [Annotation](annotation.md): A customizable annotation used to indicate a location on a map.
- [MapCircle](mapcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.
- [MapPolygon](mappolygon.md): A closed polygon overlay.
- [Marker](marker.md): A balloon-shaped annotation that marks a map location.
- [UserAnnotation](userannotation.md): Displays the person’s current location on the map.
