> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/autocomplete1](https://developer.apple.com/documentation/mapkitjs/search/autocomplete1)

# autocomplete(query, callback, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Retrieves a list of autocomplete results for the specified search query.

> Instead of passing in a callback, handle the returned promise instead. See [autocomplete()](autocomplete.md).

## Declaration

```
autocomplete(
    query: string,
    callback: SearchDelegate<SearchAutocompleteResponse>,
    options?: SearchAutocompleteOptions,
): Promise<SearchAutocompleteResponse>;
```

## Parameters

- `query`: A string that represents the user’s search in progress.
- `callback`: A callback function or delegate object.
- `options`: With the [SearchAutocompleteOptions](../searchautocompleteoptions.md) hash, you have the option to constrain the search to a desired area using the [coordinate](../searchconstructoroptions/coordinate.md) or [region](../searchconstructoroptions/region.md) properties. A coordinate or region you supply here overrides the same property you supply to the [Search](../search.md) constructor. You also have the option to override the [language](../service/language.md) for the search constructor. For example, `{ "language: "fr-CA" }` tells the server to send results localized to Canadian French. For a complete list of options you can use to constrain your search, see [SearchAutocompleteOptions](../searchautocompleteoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves when the autocomplete request completes.

<a id="Discussion"></a>

## Discussion

To provide the user with a menu of search suggestions, invoke the [autocomplete()](autocomplete1.md) method as users type. This method minimizes typing and brings users the results they’re looking for.

MapKit JS invokes the `callback` function on failure and success with two arguments, `error` and `data`:

- `error`. An error object that contains an error code and descriptive message.
- `data`. A [SearchAutocompleteResponse](../searchautocompleteresponse.md) object.

The system doesn’t call the callback function or delegate if you cancel the request before MapKit JS receives a response.

## See Also

### Deprecated

- [cancel()](../service/cancel.md): Deprecated. Cancels a request using the provided request promise.
- [RegionPriority](regionpriority-data.var.md): Deprecated. A static property that allows you to access region priority enumeration.
- [search()](search1.md): Deprecated. Retrieves the results of a search query.
