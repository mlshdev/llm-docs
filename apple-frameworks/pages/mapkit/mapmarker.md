> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapmarker](https://developer.apple.com/documentation/mapkit/mapmarker)

# MapMarker

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

A balloon-shaped annotation used to indicate the location on a map.

> Use [Marker](marker.md) along with [Map](map.md) initializers that take a [MapContentBuilder](mapcontentbuilder.md) instead.

## Declaration

```swift
struct MapMarker
```

<a id="overview"></a>

## Overview

Create a [Map](map.md) and display marker annotations by returning a view that conforms to [MapAnnotationProtocol](mapannotationprotocol.md), such as [MapMarker](mapmarker.md), from the trailing closure of [init(coordinateRegion:interactionModes:showsUserLocation:userTrackingMode:annotationItems:annotationContent:)](map/init%28coordinateregion_interactionmodes_showsuserlocation_usertrackingmode_annotationitems_annotationcontent_%29.md) or [init(mapRect:interactionModes:showsUserLocation:userTrackingMode:annotationItems:annotationContent:)](map/init%28maprect_interactionmodes_showsuserlocation_usertrackingmode_annotationitems_annotationcontent_%29.md). Items you provide as a collection to the source annotations need to conform to [Identifiable](https://developer.apple.com/documentation/swift/identifiable).

For example, the following code displays a map with a marker annotation:

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

struct PinAnnotationMapView: View {
    let place: IdentifiablePlace
    @State var region: MKCoordinateRegion

    var body: some View {
        Map(coordinateRegion: $region,
            annotationItems: [place])
        { place in
            MapMarker(coordinate: place.location,
                   tint: Color.purple)
        }
    }
}

```

## Topics

### Creating a map marker

- [init(coordinate:tint:)](mapmarker/init%28coordinate_tint_%29.md): Deprecated. Creates a marker annotation at the map location you specify.

## Relationships

### Conforms To

- [MapAnnotationProtocol](mapannotationprotocol.md)

## See Also

### Structures

- [MapAnnotation](mapannotation.md): Deprecated. A customizable annotation that marks a map location.
- [MapPin](mappin.md): Deprecated. A pin-shaped annotation used to indicate a location on a map.
