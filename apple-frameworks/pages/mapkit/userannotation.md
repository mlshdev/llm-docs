> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/userannotation](https://developer.apple.com/documentation/mapkit/userannotation)

# UserAnnotation

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Displays the person’s current location on the map.

## Declaration

```swift
@MainActor @preconcurrency struct UserAnnotation<Content> where Content : View
```

<a id="overview"></a>

## Overview

Displays the person’s current location using the system styled user location indicator.

## Topics

### Creating a user annotation

- [init()](userannotation/init%28%29.md): Creates an annotation that displays the person’s current location.
- [init(anchor:)](userannotation/init%28anchor_%29.md): Creates an annotation that displays the person’s current location using the system styled user location indicator with the specified anchor point.
- [init(anchor:content:)](userannotation/init%28anchor_content_%29-8u3r4.md): Creates an annotation that displays a person’s current location using the system styled user location indicator with the specified anchor point using a custom view.
- [init(anchor:content:)](userannotation/init%28anchor_content_%29-3e78j.md): Create an annotation that displays the person’s current location of the user using a custom view.

### Setting the visibility of the title and subtitle

- [annotationTitles(\_:)](mapcontent/annotationtitles%28__%29.md): Sets the visibility of titles for markers and annotations.
- [annotationSubtitles(\_:)](mapcontent/annotationsubtitles%28__%29.md): Sets the visibility of subtitles for markers and annotations.

### Information about a person’s location

- [UserLocation](userlocation.md): A structure that contains Information about the person’s current location.

### Setting the overlay level

- [mapOverlayLevel(level:)](mapcontent/mapoverlaylevel%28level_%29.md): Specifies the position of overlays relative to other map content.

### Setting the tag

- [tag(\_:)](mapcontent/tag%28__%29.md): Sets the unique tag value of this piece of map content.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

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
- [Marker](marker.md): A balloon-shaped annotation that marks a map location.
