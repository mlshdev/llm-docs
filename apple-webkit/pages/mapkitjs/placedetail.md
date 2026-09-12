> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placedetail](https://developer.apple.com/documentation/mapkitjs/placedetail)

# PlaceDetail

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.78.1+

An interactive view that displays information about a place.

## Declaration

```
class PlaceDetail
```

## Mentioned In

- [Displaying place information using the Maps Embed API](displaying-place-information-using-the-maps-embed-api.md)
- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

![A screenshot showing the PlaceDetail view containing the details information of California Science Center.](https://developer.apple.com/images/com.apple.mapkitjs/PlaceDetail-cl-01@2x.png)

For more information on places, see [Identifying unique locations with Place IDs](https://developer.apple.com/documentation/mapkit/identifying-unique-locations-with-place-ids).

## Topics

### Creating and terminating a place detail

- [PlaceDetail()](placedetail/placedetailconstructor.md): A representation of a place detail.
- [PlaceDetailOptions](placedetailoptions.md): Options that you may provide when constructing place detail views.
- [destroy()](placedetail/destroy.md): Terminates a place detail.

### Working with place detail settings

- [colorScheme](placedetail/colorscheme.md): The color scheme when displaying a place detail.
- [displaysMap](placedetail/displaysmap.md): A Boolean value that indicates whether to display the map in the place detail.
- [element](placedetail/element.md): The place detail’s DOM element.
- [place](placedetail/place.md): The place that the place detail displays.
- [ColorSchemes](placedetail/colorschemes.md): Deprecated. A static property that allows you to access the Look Around color scheme enumeration.

## See Also

### Places

- [Place](place.md): A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
- [PlaceLookup](placelookup.md): An object that provides the ability to look up place information for a specified Place ID.
- [placeDetails](mapkit/placedetails.md): A list of all place detail objects that are currently active on a page.
- [PlaceSelectionAccessoryOptions](placeselectionaccessoryoptions.md): The options for selection accessories.
- [PlaceAnnotation](placeannotation.md): An annotation for a place.
- [PlaceSelectionAccessory](placeselectionaccessory.md): The accessory that conveys information about a place associated with an annotation.
