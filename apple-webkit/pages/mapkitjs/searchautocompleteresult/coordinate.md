> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchautocompleteresult/coordinate](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/coordinate)

# coordinate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The coordinate of the result when it corresponds to a single place.

## Declaration

```
coordinate: Coordinate | null;
```

<a id="Discussion"></a>

## Discussion

The coordinate may not be available for all results, and can return `null`. The coordinate is an approximate location.

## See Also

### Autocomplete results

- [displayLines](displaylines.md): Lines of text to display to the user in an autocomplete menu.
