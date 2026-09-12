> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderreverselookupoptions/language](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions/language)

# language

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The language to use when displaying the reverse lookup results.

## Declaration

```
language?: string;
```

<a id="Discussion"></a>

## Discussion

[language](../geocoderlookupoptions/language.md) is the only option that you can set for the reverse geocoder. For example, `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. If you set it, this option overrides the language you provide in the Geocoder constructor.

## See Also

### Options

- [signal](signal.md): A signal object allowing you to cancel the request.
