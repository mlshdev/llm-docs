> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/search1](https://developer.apple.com/documentation/mapkitjs/search/search1)

# search(query, callback, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Retrieves the results of a search query.

> Instead of passing in a callback, handle the returned promise instead. See [search()](search.md).

## Declaration

```
search(
    query: string | SearchAutocompleteResult,
    callback: SearchDelegate<SearchResponse>,
    options?: SearchOptions,
): Promise<SearchResponse>;
```

## Parameters

- `query`: A `string` or a [SearchAutocompleteResult](../searchautocompleteresult.md).
- `callback`: A callback function or delegate object.
- `options`: With the [SearchOptions](../searchoptions.md) hash, you can constrain the search to a desired area using the `coordinate` or `region` properties. A coordinate or region you supply here overrides the same property you supply to the [Search](../search.md) constructor. Another option is [language](../searchoptions/language.md). For example, `{ "language": "fr-CA" }` tells the server to send results localized to Canadian French. If you set it, this option overrides the language the system provides to the search constructor.

<a id="return-value"></a>

## Return Value

A promise that resolves when the search completes.

<a id="Discussion"></a>

## Discussion

The [search()](search1.md) method returns a set of locations that matches a user-entered query or a [SearchAutocompleteResult](../searchautocompleteresult.md).

MapKit JS invokes the `callback` function on failure and success with two arguments, `error` and `data`. If you cancel the request before you receive a response, the system doesn’t call this function. The callback can also be a delegate object.

The arguments are:

- `error` (`Error`). An error code and descriptive message.
- `data` ([SearchResponse](../searchresponse.md)). An object that contains [query](../searchresponse/query.md), [boundingRegion](../searchresponse/boundingregion.md), and [places](../searchresponse/places.md) properties.

The `data` properties include:

- [query](../searchresponse/query.md) (`String`). The query that corresponds to the results, if you don’t use [SearchAutocompleteResult](../searchautocompleteresult.md) to perform the search. Optional.
- [boundingRegion](../searchresponse/boundingregion.md) ([CoordinateRegion](../coordinateregion.md)). A region that encloses the search results. This property isn’t present if there aren’t any results.
- [places](../searchresponse/places.md) (array of [Place](../place.md)). An array of [Place](../place.md) objects. The places array is empty if there isn’t a match.

The following example searches for *coffee shop* in and around the visible map area, and adds the results as annotations:

```javascript
const search = new mapkit.Search({ region: map.region });

search.search("coffee shop", function(error, data) {
    if (error) {
        // Handle the search error.
        return;
    }
    const annotations = data.places.map(function(place) {
        const annotation = new mapkit.MarkerAnnotation(place.coordinate);
        annotation.title = place.name;
        annotation.subtitle = place.formattedAddress;
        annotation.color = "#9B6134";
        return annotation;
    });
    map.showItems(annotations);
});
```

## See Also

### Deprecated

- [autocomplete()](autocomplete1.md): Deprecated. Retrieves a list of autocomplete results for the specified search query.
- [cancel()](../service/cancel.md): Deprecated. Cancels a request using the provided request promise.
- [RegionPriority](regionpriority-data.var.md): Deprecated. A static property that allows you to access region priority enumeration.
