> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/service](https://developer.apple.com/documentation/mapkitjs/service)

# Service

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An abstract class that provides common interfaces for service objects.

## Declaration

```
abstract class Service
```

<a id="Discussion"></a>

## Discussion

You can’t initialize an abstract class. Use specific service classes to create service objects.

## Topics

### Instance Properties

- [getsUserLocation](service/getsuserlocation.md): A Boolean value that indicates whether the request returns results near a person’s location.
- [language](service/language.md): A language ID that determines the language to use for displaying addresses.

### Instance Methods

- [cancel()](service/cancel.md): Deprecated. Cancels a request using the provided request promise.

## Relationships

### Inherited By

- [Directions](directions.md)
- [Geocoder](geocoder.md)
- [PlaceLookup](placelookup.md)
- [PointsOfInterestSearch](pointsofinterestsearch.md)
- [Search](search.md)

## See Also

### Service

- [RequestError](requesterror.md): The error that a service method’s returned promise rejects with when a request fails.
