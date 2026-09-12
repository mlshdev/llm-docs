> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.databasechangesresponse/morecoming](https://developer.apple.com/documentation/cloudkitjs/cloudkit.databasechangesresponse/morecoming)

# moreComing

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A Boolean value that indicates there are more database changes to fetch.

## Declaration

```
readonly attribute Boolean moreComing;
```

<a id="Discussion"></a>

## Discussion

`true` if there are more database changes to fetch; otherwise, `false`.

## See Also

### Response Properties

- [syncToken](synctoken.md): A point in the database’s change history.
- [zones](zones.md): The zones in the database where the changes occurred.
