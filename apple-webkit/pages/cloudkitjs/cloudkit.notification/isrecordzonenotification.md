> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.notification/isrecordzonenotification](https://developer.apple.com/documentation/cloudkitjs/cloudkit.notification/isrecordzonenotification)

# isRecordZoneNotification

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A Boolean value indicating whether this notification is a push notification that was sent because of changes to a record zone.

## Declaration

```
readonly attribute Boolean isRecordZoneNotification;
```

<a id="Discussion"></a>

## Discussion

`true` if this notification is a [CloudKit.RecordZoneNotification](../cloudkit.recordzonenotification.md) object; otherwise, `false`.

## See Also

### Getting the Notification Type

- [notificationType](notificationtype.md): The type of notification.
- [isQueryNotification](isquerynotification.md): A Boolean value indicating whether this push notification is a query notification.
