> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapkit-for-swiftui](https://developer.apple.com/documentation/mapkit/mapkit-for-swiftui)

# MapKit for SwiftUI (Swift)

**Framework:** MapKit  
**Kind:** API Collection

MapKit for SwiftUI allows you to build map-centric views and apps across Apple platforms. You can design expressive and highly interactive Maps with minimal code by composing views, using ViewBuilders and view modifiers.

<a id="overview"></a>

## Overview

Like MapKit for AppKit and UIKit, MapKit for SwiftUI allows you to take advantage of map styles ranging from satellite imagery to rich, 3D perspective imagery to present vivid maps. Using [MapContentBuilder](mapcontentbuilder.md) you can configure your maps to show [Marker](marker.md) and [Annotation](annotation.md) views, or — for more specialized content — you can design your own SwiftUI views to place on the map. To add even more interactivity, MapKit for SwiftUI supports overlays to highlight areas on the map, enabling you to animate paths and directions using [MapPolyline](mappolyline.md), or make it easy for people to dig deeper into on the ground details with tappable points of interest. People who use your app can also explore at street level using [LookAroundPreview](lookaroundpreview.md) and Look Around viewer.

> **Note**

>  For more information about integrating MapKit into your app using SwiftUI, see WWDC23 session 10043: [Meet MapKit for SwiftUI](https://developer.apple.com/videos/play/wwdc2023/10043/)

## Topics

- [Searching, displaying, and navigating to places](searching-displaying-and-navigating-to-places.md): Convert place information between coordinates and user-friendly place names, get cycling directions, and conveniently display formatted addresses.

### Essentials

- [Map](map.md): A view that displays an embedded map interface.
- [MapStyle](mapstyle.md): A style that you can apply to a map.

### Annotations and overlays

- [Annotation](annotation.md): A customizable annotation used to indicate a location on a map.
- [MapCircle](mapcircle.md): A circular overlay with a configurable radius that you center on a geographic coordinate.
- [MapPolygon](mappolygon.md): A closed polygon overlay.
- [MapPolyline](mappolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [Marker](marker.md): A balloon-shaped annotation that marks a map location.
- [UserAnnotation](userannotation.md): Displays the person’s current location on the map.

### Map controls

- [MapCompass](mapcompass.md): A view that reflects the current orientation of the associated map.
- [MapLocationCompass](maplocationcompass.md): A view that displays a combined user location button and map compass.
- [MapPitchSlider](mappitchslider.md): A slider control that allows a person to change the pitch of the map.
- [MapPitchToggle](mappitchtoggle.md): A button that sets the pitch of the associated map.
- [MapScaleView](mapscaleview.md): Displays a legend with distance information for the associated map.
- [MapUserLocationButton](mapuserlocationbutton.md): A button that sets the framing of the associated map to the user location.
- [MapZoomStepper](mapzoomstepper.md): Buttons a person uses to adjust the zoom level of the map.

### Exploring at street level

- [LookAroundPreview](lookaroundpreview.md): A view that provides a Look Around preview for a specific geographic location.

### Map features

- [MapFeature](mapfeature.md): A tappable map feature.
- [MapSelection](mapselection.md): A value representing a selected feature on a map.
- [MapSelectable](mapselectable.md)

### Map customization

- [MapCamera](mapcamera.md): Defines a virtual viewpoint above the map surface.
- [MapCameraBounds](mapcamerabounds.md): Defines an optional boundary of an area within which the map’s center needs to remain.
- [MapCameraPosition](mapcameraposition.md): A structure that describes how to position the map’s camera within the map.
- [MapCameraUpdateContext](mapcameraupdatecontext.md): A structure that defines additional information about the map camera.
- [MapCameraUpdateFrequency](mapcameraupdatefrequency.md): A structure that describes when the map camera updates.

### Place information

- [MapItemDetailSelectionAccessoryStyle](mapitemdetailselectionaccessorystyle.md): The map item detail selection accessory style.
- [mapItemDetailSelectionAccessory(\_:)](mapcontent/mapitemdetailselectionaccessory%28__%29.md): Specifies the selection accessory to display for the selected map item content.
- [mapFeatureSelectionAccessory(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectionaccessory%28_:%29): Specifies the selection accessory to display for a `MapFeature`
- [callout(\_:)](mapitemdetailselectionaccessorystyle/callout%28__%29.md): Presents the accessory as an annotation callout on the map.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailSheet(isPresented:item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28ispresented:item:displaysmap:%29): Presents a map item detail sheet.
- [mapItemDetailSheet(item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28item:displaysmap:%29): Presents a map item detail sheet.

### Geocoding

- [MKGeocodingRequest](mkgeocodingrequest.md): A class that looks up a geographic coordinate using the provided string.
- [MKReverseGeocodingRequest](mkreversegeocodingrequest.md): A class that looks up address strings for the provided geographic coordinates.

### Representing places and addresses

- [MKMapItem](mkmapitem.md): A point of interest on the map.
- [MKAddress](mkaddress.md): A class that contains a full address, and, optionally, a short address.
- [MKAddressRepresentations](mkaddressrepresentations.md): A class that provides formatted address strings.
- [GeoToolbox](../geotoolbox.md): Determine place descriptor information for map coordinates.

### Points of interest

- [PointOfInterestCategories](pointofinterestcategories.md): A structure you use to define points of interest to include or exclude on a map.

### Protocols

- [DynamicMapContent](dynamicmapcontent.md): A type of view that generates views from an underlying collection of data.
- [MapContent](mapcontent.md): A protocol used to construct map content such as controls, markers, and annotations.
- [MapContentBuilder](mapcontentbuilder.md): A result builder that creates map content from closures you provide.
- [MapContentView](mapcontentview.md): A view that contains content that displays on a map at a specific position, and that responds to specific interactions you specify.

### Structures

- [DefaultUserAnnotationContent](defaultuserannotationcontent.md): A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](emptymapcontent.md): A map content element that doesn’t contain any content.
- [MapProxy](mapproxy.md): A proxy for accessing sizing information about a given map view.
- [MapReader](mapreader.md): A container view that defines its contents as a function of information about the first contained map.
- [TupleMapContent](tuplemapcontent.md): A view created from a Swift tuple of map content values.
- [MapSelectableContentView](mapselectablecontentview.md)

## See Also

### The MapKit APIs

- [MapKit for AppKit and UIKit](mapkit-for-appkit-and-uikit.md)
- [Adopting unified Maps URLs](unified-map-urls.md): Access Maps URLs and options for displaying Maps information across Apple platforms.

# MapKit for SwiftUI (Objective-C)

**Framework:** MapKit  
**Kind:** API Collection

MapKit for SwiftUI allows you to build map-centric views and apps across Apple platforms. You can design expressive and highly interactive Maps with minimal code by composing views, using ViewBuilders and view modifiers.

<a id="overview"></a>

## Overview

Like MapKit for AppKit and UIKit, MapKit for SwiftUI allows you to take advantage of map styles ranging from satellite imagery to rich, 3D perspective imagery to present vivid maps. Using [MapContentBuilder](mapcontentbuilder.md) you can configure your maps to show [Marker](marker.md) and [Annotation](annotation.md) views, or — for more specialized content — you can design your own SwiftUI views to place on the map. To add even more interactivity, MapKit for SwiftUI supports overlays to highlight areas on the map, enabling you to animate paths and directions using [MapPolyline](mappolyline.md), or make it easy for people to dig deeper into on the ground details with tappable points of interest. People who use your app can also explore at street level using [LookAroundPreview](lookaroundpreview.md) and Look Around viewer.

> **Note**

>  For more information about integrating MapKit into your app using SwiftUI, see WWDC23 session 10043: [Meet MapKit for SwiftUI](https://developer.apple.com/videos/play/wwdc2023/10043/)

## Topics

### Geocoding

- [MKGeocodingRequest](mkgeocodingrequest.md): A class that looks up a geographic coordinate using the provided string.
- [MKReverseGeocodingRequest](mkreversegeocodingrequest.md): A class that looks up address strings for the provided geographic coordinates.

### Representing places and addresses

- [MKMapItem](mkmapitem.md): A point of interest on the map.
- [MKAddress](mkaddress.md): A class that contains a full address, and, optionally, a short address.
- [MKAddressRepresentations](mkaddressrepresentations.md): A class that provides formatted address strings.

## See Also

### The MapKit APIs

- [MapKit for AppKit and UIKit](mapkit-for-appkit-and-uikit.md)
- [Adopting unified Maps URLs](unified-map-urls.md): Access Maps URLs and options for displaying Maps information across Apple platforms.
