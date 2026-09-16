> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.querynotification/ispublicdatabase

# isPublicDatabase

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Boolean value indicating whether the notification is from the public database.

## Declaration

```
readonly attribute Boolean isPublicDatabase;
```

<a id="Discussion"></a>

## Discussion

`true` if the notification is from the public database; otherwise, `false`.

## See Also

### Getting Record Changes

- [queryNotificationReason](querynotificationreason.md): The reason for the query notification.
- [recordName](recordname.md): The name of the record that was created, deleted, or updated.
- [recordFields](recordfields.md): A dictionary representation of the fields that changed in the record.
