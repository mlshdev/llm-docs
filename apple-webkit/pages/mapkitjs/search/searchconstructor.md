> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/searchconstructor](https://developer.apple.com/documentation/mapkitjs/search/searchconstructor)

# new Search(options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a search object with optional initial values that you provide.

## Declaration

```
constructor(options?: SearchConstructorOptions);
```

<a id="Discussion"></a>

## Discussion

To use search, create an instance of a [Search](../search.md). You can optionally set properties of the search object by providing a dictionary of [SearchConstructorOptions](../searchconstructoroptions.md) on initialization.

```javascript
const search = new mapkit.Search({
    language: "en-GB",
    getsUserLocation: true,
    region: map.region
});
```

## See Also

### Creating a search

- [SearchConstructorOptions](../searchconstructoroptions.md): Options you provide when you create a search object.
