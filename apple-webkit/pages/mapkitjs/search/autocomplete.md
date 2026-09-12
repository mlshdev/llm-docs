> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/autocomplete](https://developer.apple.com/documentation/mapkitjs/search/autocomplete)

# autocomplete(query, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Retrieves a list of autocomplete results for the specified search query.

## Declaration

```
autocomplete(
    query: string,
    options?: SearchAutocompleteOptions,
): Promise<SearchAutocompleteResponse>;
```

## Parameters

- `query`: A string that represents the user’s search in progress.
- `options`: Options for this specific query that supersede values set on the [Search](../search.md) object. See [SearchAutocompleteOptions](../searchautocompleteoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [SearchAutocompleteResponse](../searchautocompleteresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

To provide the user with a menu of search suggestions, invoke the [autocomplete()](autocomplete.md) method as users type. This method minimizes typing and brings users the results they’re looking for.

Pass an `AbortSignal` from an `AbortController` to the [signal](../searchoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Performing a search autocomplete

- [SearchAutocompleteOptions](../searchautocompleteoptions.md): Options you provide to constrain an autocomplete request.
- [SearchAutocompleteResponse](../searchautocompleteresponse.md): An object containing the response from an autocomplete request.
- [SearchAutocompleteResult](../searchautocompleteresult.md): The result of an autocomplete query, including display lines and a coordinate.
