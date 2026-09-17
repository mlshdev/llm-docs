> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/mapkitlibraryloadevent/libraries

# libraries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.75+

The libraries that the framework loaded or failed to load.

## Declaration

```
readonly libraries: string[];
```

<a id="Discussion"></a>

## Discussion

The event type can be `load` or `load-error`, which indicates if the loading operation succeeded or failed.
