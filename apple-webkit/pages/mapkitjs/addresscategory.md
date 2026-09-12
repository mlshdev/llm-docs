> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/addresscategory](https://developer.apple.com/documentation/mapkitjs/addresscategory)

# AddressCategory

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.78.1+

The categories of address components that users can search for with an address filter.

## Declaration

```
const AddressCategory: Readonly<{
    readonly Country: "Country";
    readonly AdministrativeArea: "AdministrativeArea";
    readonly SubAdministrativeArea: "SubAdministrativeArea";
    readonly Locality: "Locality";
    readonly SubLocality: "SubLocality";
    readonly PostalCode: "PostalCode";
}>
type AddressCategory =
    (typeof AddressCategory)[keyof typeof AddressCategory];
```

## Topics

### Category values

- [AdministrativeArea](addresscategory/administrativearea.md): The primary administrative divisions of countries or regions.
- [Country](addresscategory/country.md): Countries and regions.
- [Locality](addresscategory/locality.md): Local administrative divisions, postal cities, and populated places.
- [PostalCode](addresscategory/postalcode.md): An address code for mail sorting and delivery.
- [SubAdministrativeArea](addresscategory/subadministrativearea.md): The secondary administrative divisions of countries or regions.
- [SubLocality](addresscategory/sublocality.md): Local administrative subdivisions, postal city subdistricts, and neighborhoods.

## See Also

### Enumerations

- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
