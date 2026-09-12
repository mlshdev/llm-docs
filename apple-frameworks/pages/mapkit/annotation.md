> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/annotation](https://developer.apple.com/documentation/mapkit/annotation)

# Annotation

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A customizable annotation used to indicate a location on a map.

## Declaration

```swift
@MainActor @preconcurrency struct Annotation<Label, Content> where Label : View, Content : View
```

<a id="overview"></a>

## Overview

Use this view to annotations in the closure you provide to the `content` parameter in the [Map](map.md) initializers.

## Topics

### Creating annotations

- [init(\_:coordinate:anchor:accessoryAnchor:content:)](annotation/init%28__coordinate_anchor_accessoryanchor_content_%29-6rxmn.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:accessoryAnchor:content:)](annotation/init%28__coordinate_anchor_accessoryanchor_content_%29-14m3t.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(coordinate:anchor:accessoryAnchor:content:label:)](annotation/init%28coordinate_anchor_accessoryanchor_content_label_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(item:anchor:accessoryAnchor:content:)](annotation/init%28item_anchor_accessoryanchor_content_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](annotation/init%28__coordinate_anchor_content_%29-2w242.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](annotation/init%28__coordinate_anchor_content_%29-6wnoh.md): Creates an annotation that displays a view at a coordinate on the map using a title key, coordinate, anchor location, and view you provide.
- [init(coordinate:anchor:content:label:)](annotation/init%28coordinate_anchor_content_label_%29.md): Creates an annotation that displays a view on the map using coordinates, anchor location, view, and label you provide.

### Setting the visibility of the title and subtitle

- [annotationTitles(\_:)](mapcontent/annotationtitles%28__%29.md): Sets the visibility of titles for markers and annotations.
- [annotationSubtitles(\_:)](mapcontent/annotationsubtitles%28__%29.md): Sets the visibility of subtitles for markers and annotations.

### Setting the tag

- [tag(\_:)](mapcontent/tag%28__%29.md): Sets the unique tag value of this piece of map content.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

### Displaying place information

- [mapItemDetailSelectionAccessory(\_:)](mapcontent/mapitemdetailselectionaccessory%28__%29.md): Specifies the selection accessory to display for the selected map item content.

### Initializers

- [init(\_:coordinate:anchor:accessoryAnchor:content:)](annotation/init%28__coordinate_anchor_accessoryanchor_content_%29-8wi4r.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](annotation/init%28__coordinate_anchor_content_%29-8k419.md): Creates an annotation that displays a view at a coordinate on the map.

## Relationships

### Conforms To

- [MapContent](mapcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations and overlays

- [MapCircle](mapcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.
- [MapPolygon](mappolygon.md): A closed polygon overlay.
- [MapPolyline](mappolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [Marker](marker.md): A balloon-shaped annotation that marks a map location.
- [UserAnnotation](userannotation.md): Displays the person’s current location on the map.
