> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.queryresponse/desiredkeys

# desiredKeys

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

An array of strings containing record field names that limits the amount of data returned in this operation.

## Declaration

```
readonly attribute String[] desiredKeys;
```

<a id="Discussion"></a>

## Discussion

The default is `null`, which fetches all record fields.

## See Also

### Accessing Request Properties

- [zoneID](zoneid.md): A [CloudKit.ZoneID](../cloudkit.zoneid.md) dictionary that identifies a record zone in the database.
- [resultsLimit](resultslimit.md): The maximum number of records to fetch.
- [continuationMarker](continuationmarker.md): Marks the location of the last batch of results.
- [zoneWide](zonewide.md): A Boolean value that determines whether all zones should be searched.
