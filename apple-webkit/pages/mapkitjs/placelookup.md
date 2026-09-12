> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placelookup](https://developer.apple.com/documentation/mapkitjs/placelookup)

# PlaceLookup

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.78.1+

An object that provides the ability to look up place information for a specified Place ID.

## Declaration

```
class PlaceLookup extends Service
```

<a id="overview"></a>

## Overview

For more information on places, see [Identifying unique locations with Place IDs](https://developer.apple.com/documentation/mapkit/identifying-unique-locations-with-place-ids).

## Topics

### Creating a place lookup

- [PlaceLookup()](placelookup/placelookupconstructor.md): Creates a place lookup with a set of options.

### Getting a place

- [getPlace()](placelookup/getplace.md): Obtains a place using its identifier.
- [getPlace()](placelookup/getplace1.md): Obtains the place associated with a map feature annotation.
- [PlaceLookupOptions](placelookupoptions.md): Options for place lookup requests.

### Deprecated

- [getPlace()](placelookup/getplace2.md): Deprecated. Obtains a place using its identifier.

## Relationships

### Inherits From

- [Service](service.md)

## See Also

### Places

- [Place](place.md): A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
- [placeDetails](mapkit/placedetails.md): A list of all place detail objects that are currently active on a page.
- [PlaceSelectionAccessoryOptions](placeselectionaccessoryoptions.md): The options for selection accessories.
- [PlaceAnnotation](placeannotation.md): An annotation for a place.
- [PlaceDetail](placedetail.md): An interactive view that displays information about a place.
- [PlaceSelectionAccessory](placeselectionaccessory.md): The accessory that conveys information about a place associated with an annotation.
