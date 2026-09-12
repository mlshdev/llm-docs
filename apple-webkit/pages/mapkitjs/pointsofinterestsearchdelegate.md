> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointsofinterestsearchdelegate](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate)

# PointsOfInterestSearchDelegate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Type  
**Availability:** MapKit JS 5.45+

An object or callback function that MapKit JS calls when fetching points of interest.

## Declaration

```
type PointsOfInterestSearchDelegate =
    | {
          searchDidError: (error: Error) => void;
          searchDidComplete: (result: PointsOfInterestSearchResponse) => void;
      }
    | ((
          error: Error | null,
          result: PointsOfInterestSearchResponse | null,
      ) => void);
```

<a id="discussion"></a>

## Discussion

You may pass an object to the search method instead of using of a search delegate callback function. MapKit JS calls the following methods on the delegate object when they exist:

- `searchDidComplete` – Upon successful completion of a search request, this method returns a data object that is the same as the one passed to the search callback function.
- `searchDidError` – Called when the search request fails.

## See Also

### Fetching points of interest

- [search()](pointsofinterestsearch/search.md): Fetches points of interest.
- [PointsOfInterestSearchResponse](pointsofinterestsearchresponse.md): The result of a request used to fetch points of interest.
