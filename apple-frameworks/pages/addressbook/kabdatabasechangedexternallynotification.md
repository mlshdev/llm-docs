> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/kabdatabasechangedexternallynotification](https://developer.apple.com/documentation/addressbook/kabdatabasechangedexternallynotification)

# kABDatabaseChangedExternallyNotification

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Global Variable  
**Availability:** macOS

Posted when a process other than the current one has changed the Address Book database.

## Declaration

```objectivec
extern NSString * const kABDatabaseChangedExternallyNotification;
```

<a id="Discussion"></a>

## Discussion

Depending on the operation performed on the address book, one or more of the following keys may be included in the user-info dictionary: `kABInsertedRecords`, `kABUpdatedRecords`, and `kABDeletedRecords`. The values for each of the keys are the unique IDs of the records that were inserted, updated, or deleted, respectively. If the values for all the keys are `nil`, every record has changes. For example, this happens when the Address Book database  is restored from a backup copy.

> **Note**

>  The system posts this notification on the main actor.

## See Also

### Notifications

- [kABDatabaseChangedNotification](kabdatabasechangednotification.md): Posted when this process has changed the Address Book database.
