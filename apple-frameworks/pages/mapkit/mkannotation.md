> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotation](https://developer.apple.com/documentation/mapkit/mkannotation)

# MKAnnotation (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An interface for associating your content with a specific map location.

## Declaration

```swift
protocol MKAnnotation : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An object that adopts this protocol manages the data that you want to display on the map surface. It doesn’t provide the visual representation that the map displays. Instead, your map view’s delegate provides the [MKAnnotationView](mkannotationview.md) objects necessary to display the content of your annotations. When you want to display content at a specific point on the map, add an annotation object to the map view. When the annotation’s [coordinate](mkannotation/coordinate.md) is visible on the map, the map view asks its delegate to provide an appropriate view to display any content associated with the annotation. You implement the [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of the delegate to provide that view.

An object that adopts this protocol needs to implement the [coordinate](mkannotation/coordinate.md) property. The other methods of this protocol are optional.

## Topics

### Position attributes

- [coordinate](mkannotation/coordinate.md): The center point (specified as a map coordinate) of the annotation.

### Title attributes

- [title](mkannotation/title.md): The string containing the annotation’s title.
- [subtitle](mkannotation/subtitle.md): The string containing the annotation’s subtitle.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MKOverlay](mkoverlay.md)

### Conforming Types

- [MKCircle](mkcircle.md)
- [MKClusterAnnotation](mkclusterannotation.md)
- [MKGeodesicPolyline](mkgeodesicpolyline.md)
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md)
- [MKMapItemAnnotation](mkmapitemannotation.md)
- [MKMultiPoint](mkmultipoint.md)
- [MKMultiPolygon](mkmultipolygon.md)
- [MKMultiPolyline](mkmultipolyline.md)
- [MKPlacemark](mkplacemark.md)
- [MKPointAnnotation](mkpointannotation.md)
- [MKPolygon](mkpolygon.md)
- [MKPolyline](mkpolyline.md)
- [MKShape](mkshape.md)
- [MKTileOverlay](mktileoverlay.md)
- [MKUserLocation](mkuserlocation.md)

## See Also

### Shared behavior

- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.
- [MKAnnotationView](mkannotationview.md): The visual representation of one of your annotation objects.

# MKAnnotation (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An interface for associating your content with a specific map location.

## Declaration

```objectivec
@protocol MKAnnotation <NSObject>
```

<a id="overview"></a>

## Overview

An object that adopts this protocol manages the data that you want to display on the map surface. It doesn’t provide the visual representation that the map displays. Instead, your map view’s delegate provides the [MKAnnotationView](mkannotationview.md) objects necessary to display the content of your annotations. When you want to display content at a specific point on the map, add an annotation object to the map view. When the annotation’s [coordinate](mkannotation/coordinate.md) is visible on the map, the map view asks its delegate to provide an appropriate view to display any content associated with the annotation. You implement the [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of the delegate to provide that view.

An object that adopts this protocol needs to implement the [coordinate](mkannotation/coordinate.md) property. The other methods of this protocol are optional.

## Topics

### Position attributes

- [coordinate](mkannotation/coordinate.md): The center point (specified as a map coordinate) of the annotation.
- [setCoordinate:](mkannotation/setcoordinate_.md): Sets the new center point of the annotation.

### Title attributes

- [title](mkannotation/title.md): The string containing the annotation’s title.
- [subtitle](mkannotation/subtitle.md): The string containing the annotation’s subtitle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MKOverlay](mkoverlay.md)

### Conforming Types

- [MKClusterAnnotation](mkclusterannotation.md)
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md)
- [MKMapItemAnnotation](mkmapitemannotation.md)
- [MKPlacemark](mkplacemark.md)
- [MKShape](mkshape.md)
- [MKUserLocation](mkuserlocation.md)

## See Also

### Shared behavior

- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.
- [MKAnnotationView](mkannotationview.md): The visual representation of one of your annotation objects.
