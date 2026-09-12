> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/marker](https://developer.apple.com/documentation/mapkit/marker)

# Marker

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A balloon-shaped annotation that marks a map location.

## Declaration

```swift
@MainActor @preconcurrency struct Marker<Label> where Label : View
```

<a id="overview"></a>

## Overview

Use this view to create marker instances in the closure you provide to the `content` parameter in the [Map](map.md) initializers.

## Topics

### Creating a marker

- [init(\_:coordinate:)](marker/init%28__coordinate_%29-82942.md): Creates a marker at the given location with the label you provide.
- [init(\_:image:coordinate:)](marker/init%28__image_coordinate_%29-36l1p.md): Creates a marker at the given location with the provided title and image resource to display as the balloon’s icon.
- [init(\_:systemImage:coordinate:)](marker/init%28__systemimage_coordinate_%29-50yl4.md): Creates a marker at the given location with the provided title and a system image the map displays as the balloon’s icon.
- [init(\_:coordinate:)](marker/init%28__coordinate_%29-8wxlv.md): Creates a marker at the given location with the localized string key you provide.
- [init(\_:image:coordinate:)](marker/init%28__image_coordinate_%29-28mge.md): Creates a marker at the given location with the provided localized title and image resource to display as the balloon’s icon.
- [init(\_:monogram:coordinate:)](marker/init%28__monogram_coordinate_%29-2ojcy.md): Creates a marker at the given location with the provided title key and monogram.
- [init(\_:monogram:coordinate:)](marker/init%28__monogram_coordinate_%29-21hql.md): Creates a marker at the given location with the provided title string and monogram.
- [init(\_:systemImage:coordinate:)](marker/init%28__systemimage_coordinate_%29-2t4i0.md): Creates a marker at the given location with a localized title, and a system image the map displays as the balloon’s icon.
- [init(coordinate:label:)](marker/init%28coordinate_label_%29.md): Creates a marker at the given location with the provided label.
- [init(item:)](marker/init%28item_%29.md): Creates a marker for a given map item using a MapKit-provided label.

### Setting the visibility of the title and subtitle

- [annotationTitles(\_:)](mapcontent/annotationtitles%28__%29.md): Sets the visibility of titles for markers and annotations.
- [annotationSubtitles(\_:)](mapcontent/annotationsubtitles%28__%29.md): Sets the visibility of subtitles for markers and annotations.

### Styling the marker

- [tint(\_:)](mapcontent/tint%28__%29.md): The tint shape style to apply to map content.

### Setting the tag

- [tag(\_:)](mapcontent/tag%28__%29.md): Sets the unique tag value of this piece of map content.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

### Displaying place information

- [mapItemDetailSelectionAccessory(\_:)](mapcontent/mapitemdetailselectionaccessory%28__%29.md): Specifies the selection accessory to display for the selected map item content.

### Initializers

- [init(\_:coordinate:)](marker/init%28__coordinate_%29-3bjj6.md): Creates a marker at the given location.
- [init(\_:image:coordinate:)](marker/init%28__image_coordinate_%29-1q3pz.md): Creates a marker at the given location with an image displayed as the balloon’s icon.
- [init(\_:monogram:coordinate:)](marker/init%28__monogram_coordinate_%29-77k4r.md): Creates a marker at the given location with a monogram displayed as the balloon’s icon.
- [init(\_:systemImage:coordinate:)](marker/init%28__systemimage_coordinate_%29-18xnl.md): Creates a marker at the given location with a system image displayed as the balloon’s icon.

## Relationships

### Conforms To

- [MapContent](mapcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations and overlays

- [Annotation](annotation.md): A customizable annotation used to indicate a location on a map.
- [MapCircle](mapcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.
- [MapPolygon](mappolygon.md): A closed polygon overlay.
- [MapPolyline](mappolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [UserAnnotation](userannotation.md): Displays the person’s current location on the map.
