> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.databasechangesresponse/zones](https://developer.apple.com/documentation/cloudkitjs/cloudkit.databasechangesresponse/zones)

# zones

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The zones in the database where the changes occurred.

## Declaration

```
readonly attribute CloudKit.RecordZoneChangesOptions[] zones;
```

<a id="Discussion"></a>

## Discussion

To fetch record changes in these zones, pass this property to the [fetchRecordZoneChanges](../cloudkit.database/fetchrecordzonechanges.md) method in the [CloudKit.Database](../cloudkit.database.md) class.

## See Also

### Response Properties

- [moreComing](morecoming.md): A Boolean value that indicates there are more database changes to fetch.
- [syncToken](synctoken.md): A point in the database’s change history.
