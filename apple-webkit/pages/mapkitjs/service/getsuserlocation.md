> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/service/getsuserlocation](https://developer.apple.com/documentation/mapkitjs/service/getsuserlocation)

# getsUserLocation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that indicates whether the request returns results near a person’s location.

## Declaration

```
get getsUserLocation(): boolean;
set getsUserLocation(value: boolean);
```

<a id="Discussion"></a>

## Discussion

When set to `true`, the request returns results that are near the user’s current location. The default value is `false`.

## See Also

### Creating a geocoder object

- [Geocoder()](../geocoder/geocoderconstructor.md): Creates a geocoder object and sets optional language and user location properties.
- [ServiceConstructorOptions](../serviceconstructoroptions.md): Common options you provide when you create a service object.
- [language](language.md): A language ID that determines the language to use for displaying addresses.
