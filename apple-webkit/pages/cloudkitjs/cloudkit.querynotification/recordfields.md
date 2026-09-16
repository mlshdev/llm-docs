> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.querynotification/recordfields

# recordFields

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A dictionary representation of the fields that changed in the record.

## Declaration

```
readonly attribute Object recordFields;
```

<a id="Discussion"></a>

## Discussion

The keys are the record field names, and the values are the record field values.

## See Also

### Getting Record Changes

- [queryNotificationReason](querynotificationreason.md): The reason for the query notification.
- [recordName](recordname.md): The name of the record that was created, deleted, or updated.
- [isPublicDatabase](ispublicdatabase.md): Boolean value indicating whether the notification is from the public database.
