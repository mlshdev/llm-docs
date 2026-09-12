> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointsofinterestsearch/search](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/search)

# search(options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.45+

Fetches points of interest.

## Declaration

```
search(
    options?: PointsOfInterestSearchOptions,
): Promise<PointsOfInterestSearchResponse>;
```

## Parameters

- `options`: A [PointsOfInterestSearchOptions](../pointsofinterestsearchoptions.md) object that can overwrite the same options set on the property or that you supplied to the [PointsOfInterestSearch](../pointsofinterestsearch.md) constructor.

<a id="return-value"></a>

## Return Value

A promise that resolves with a [PointsOfInterestSearchResponse](../pointsofinterestsearchresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

The [search()](search.md) method returns a set of points of interest within the region defined and matching the [PointOfInterestFilter](../pointofinterestfilter.md).

Pass an `AbortSignal` from an `AbortController` to the [signal](../pointsofinterestsearchoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Fetching points of interest

- [PointsOfInterestSearchDelegate](../pointsofinterestsearchdelegate.md): An object or callback function that MapKit JS calls when fetching points of interest.
- [PointsOfInterestSearchResponse](../pointsofinterestsearchresponse.md): The result of a request used to fetch points of interest.
