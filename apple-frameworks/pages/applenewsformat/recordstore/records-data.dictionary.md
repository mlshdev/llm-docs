> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/recordstore/records-data.dictionary](https://developer.apple.com/documentation/applenewsformat/recordstore/records-data.dictionary)

# RecordStore.records

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

Define and provide data records that fit within the structure defined by descriptors for a data table.

## Declaration

```
object RecordStore.records
```

<a id="Discussion"></a>

## Discussion

Each descriptor can point to only one key of your data records. You can choose not to include all values from a given record in a data table. Only data that corresponds to a data descriptor will be included in your data table.
