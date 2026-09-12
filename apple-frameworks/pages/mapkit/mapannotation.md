> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapannotation](https://developer.apple.com/documentation/mapkit/mapannotation)

# MapAnnotation

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

A customizable annotation that marks a map location.

> Use [Annotation](annotation.md) along with [Map](map.md) initializers that take a [MapContentBuilder](mapcontentbuilder.md) instead.

## Declaration

```swift
struct MapAnnotation<Content> where Content : View
```

<a id="overview"></a>

## Overview

Use [MapAnnotation](mapannotation.md) to declare the layout of the view that MapKit uses for the annotation. Create a [Map](map.md) and display annotations by returning a view that conforms to [MapAnnotationProtocol](mapannotationprotocol.md) from the trailing closure of [init(coordinateRegion:interactionModes:showsUserLocation:userTrackingMode:annotationItems:annotationContent:)](map/init%28coordinateregion_interactionmodes_showsuserlocation_usertrackingmode_annotationitems_annotationcontent_%29.md) or [init(mapRect:interactionModes:showsUserLocation:userTrackingMode:annotationItems:annotationContent:)](map/init%28maprect_interactionmodes_showsuserlocation_usertrackingmode_annotationitems_annotationcontent_%29.md). Items you provide as a collection to the source  annotations need to conform to [Identifiable](https://developer.apple.com/documentation/swift/identifiable).

For example, the following code displays a map and a single annotation:

```swift
struct IdentifiablePlace: Identifiable {
    let id: UUID
    let location: CLLocationCoordinate2D
    init(id: UUID = UUID(), lat: Double, long: Double) {
        self.id = id
        self.location = CLLocationCoordinate2D(
            latitude: lat,
            longitude: long)
    }
}

struct CustomAnnotationMapView: View {
    let place: IdentifiablePlace
    @State var region: MKCoordinateRegion

    var body: some View {
        Map(coordinateRegion: $region,
            annotationItems: [place]
        ) { place in
            MapAnnotation(coordinate: place.location) {
                Rectangle().stroke(Color.blue)
                .frame(width: 20, height: 20)
            }
        }
    }
}
```

## Topics

### Creating a map annotation

- [init(coordinate:anchorPoint:content:)](mapannotation/init%28coordinate_anchorpoint_content_%29.md): Deprecated. Creates a custom annotation that provides a SwiftUI view to display at the map location that you specify.

## Relationships

### Conforms To

- [MapAnnotationProtocol](mapannotationprotocol.md)

## See Also

### Structures

- [MapMarker](mapmarker.md): Deprecated. A balloon-shaped annotation used to indicate the location on a map.
- [MapPin](mappin.md): Deprecated. A pin-shaped annotation used to indicate a location on a map.
