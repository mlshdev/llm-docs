> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/etarequestoptions/arrivaldate

# arrivalDate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

The arrival date for the trip.

## Declaration

```
arrivalDate?: Date;
```

<a id="Discussion"></a>

## Discussion

Specify either a [departureDate](departuredate.md) or an `arrivalDate`, but don’t set both. If you send both values, MapKit JS logs a warning.
