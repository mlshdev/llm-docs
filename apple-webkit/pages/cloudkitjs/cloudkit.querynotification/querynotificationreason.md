> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.querynotification/querynotificationreason](https://developer.apple.com/documentation/cloudkitjs/cloudkit.querynotification/querynotificationreason)

# queryNotificationReason

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The reason for the query notification.

## Declaration

```
readonly attribute String queryNotificationReason;
```

<a id="Discussion"></a>

## Discussion

Possible values are described in [Reasons for Query Notifications](../reasons-for-query-notifications.md).

## See Also

### Getting Record Changes

- [recordName](recordname.md): The name of the record that was created, deleted, or updated.
- [recordFields](recordfields.md): A dictionary representation of the fields that changed in the record.
- [isPublicDatabase](ispublicdatabase.md): Boolean value indicating whether the notification is from the public database.
