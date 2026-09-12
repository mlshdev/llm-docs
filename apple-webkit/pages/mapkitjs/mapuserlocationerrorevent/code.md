> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapuserlocationerrorevent/code](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent/code)

# code

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The code indicating why location acquisition failed.

## Declaration

```
readonly code: number;
```

<a id="Discussion"></a>

## Discussion

The error codes mirror the HTML Geolocation API’s error codes with one additional MapKit JS-specific error code:

- **`Error.PERMISSION_DENIED` (`1`)**: The user refuses permission to obtain location information.
- **`Error.POSITION_UNAVAILABLE` (`2`)**: The Geolocation API returns an error.
- **`Error.TIMEOUT` (`3`)**: The operation times out without acquiring the location.
- **`Error.MAPKIT_NOT_INITIALIZED` (`4`)**: MapKit JS isn’t initialized.
