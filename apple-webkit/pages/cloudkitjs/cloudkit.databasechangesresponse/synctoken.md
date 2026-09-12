> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.databasechangesresponse/synctoken](https://developer.apple.com/documentation/cloudkitjs/cloudkit.databasechangesresponse/synctoken)

# syncToken

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A point in the database’s change history.

## Declaration

```
readonly attribute String syncToken;
```

<a id="Discussion"></a>

## Discussion

If [moreComing](morecoming.md) is `true` in the response, use the this property in the next request until [moreComing](morecoming.md) is `false`.

## See Also

### Response Properties

- [moreComing](morecoming.md): A Boolean value that indicates there are more database changes to fetch.
- [zones](zones.md): The zones in the database where the changes occurred.
