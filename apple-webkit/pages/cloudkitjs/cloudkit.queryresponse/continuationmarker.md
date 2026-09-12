> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.queryresponse/continuationmarker](https://developer.apple.com/documentation/cloudkitjs/cloudkit.queryresponse/continuationmarker)

# continuationMarker

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Marks the location of the last batch of results.

## Declaration

```
readonly attribute String continuationMarker;
```

<a id="Discussion"></a>

## Discussion

Pass this key to another [performQuery](../cloudkit.database/performquery.md) method call when the results of a previous fetch exceed the maximum.

## See Also

### Related Documentation

- [moreComing](morecoming.md): A Boolean value that indicates whether there are more records to fetch.

### Accessing Request Properties

- [zoneID](zoneid.md): A [CloudKit.ZoneID](../cloudkit.zoneid.md) dictionary that identifies a record zone in the database.
- [resultsLimit](resultslimit.md): The maximum number of records to fetch.
- [desiredKeys](desiredkeys.md): An array of strings containing record field names that limits the amount of data returned in this operation.
- [zoneWide](zonewide.md): A Boolean value that determines whether all zones should be searched.
