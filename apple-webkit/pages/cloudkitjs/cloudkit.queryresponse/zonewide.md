> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.queryresponse/zonewide](https://developer.apple.com/documentation/cloudkitjs/cloudkit.queryresponse/zonewide)

# zoneWide

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A Boolean value that determines whether all zones should be searched.

## Declaration

```
readonly attribute Boolean zoneWide;
```

<a id="Discussion"></a>

## Discussion

If `true`, all zones are searched. If `false`, only the default zone is searched.

## See Also

### Accessing Request Properties

- [zoneID](zoneid.md): A [CloudKit.ZoneID](../cloudkit.zoneid.md) dictionary that identifies a record zone in the database.
- [resultsLimit](resultslimit.md): The maximum number of records to fetch.
- [continuationMarker](continuationmarker.md): Marks the location of the last batch of results.
- [desiredKeys](desiredkeys.md): An array of strings containing record field names that limits the amount of data returned in this operation.
