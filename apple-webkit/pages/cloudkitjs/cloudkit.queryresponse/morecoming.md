> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.queryresponse/morecoming](https://developer.apple.com/documentation/cloudkitjs/cloudkit.queryresponse/morecoming)

# moreComing

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A Boolean value that indicates whether there are more records to fetch.

## Declaration

```
readonly attribute Boolean moreComing;
```

<a id="Discussion"></a>

## Discussion

This property is `true` if there are more records to fetch; otherwise, `false`. If the number of records matching the query exceeds the number of records allowed in a single response, this property is `true` until all the records are returned.

## See Also

### Related Documentation

- [continuationMarker](continuationmarker.md): Marks the location of the last batch of results.
- [resultsLimit](resultslimit.md): The maximum number of records to fetch.

### Accessing Response Properties

- [query](query.md): A [CloudKit.Query](../cloudkit.query.md) dictionary containing the criteria for matching records in the database.
