> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/geocoderresponse/results

# results

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

An array of places that returns from a geocoder lookup or reverse lookup.

## Declaration

```
results: Place[];
```

<a id="Discussion"></a>

## Discussion

An object the system parses from the geocoder JSON response, which contains an array of places. Each [Place](../place.md) has several properties.

If there’s no response, [results](results.md) is an empty array.
