> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/objectidnotification()](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/objectidnotification())

# objectIDNotification() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Obtains a notification for use in merging the transaction’s changes into a managed object context.

## Declaration

```swift
func objectIDNotification() -> Notification
```

<a id="return-value"></a>

## Return Value

An `NSManagedObjectContextDidSaveObjectIDsNotification` notification.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

To merge the relevant changes into your view context, first obtain a notification by calling `objectIDNotification()` on the transaction. Then, pass the notification to [mergeChanges(fromContextDidSave:)](../nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md).

# objectIDNotification (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Obtains a notification for use in merging the transaction’s changes into a managed object context.

## Declaration

```objectivec
- (NSNotification *) objectIDNotification;
```

<a id="return-value"></a>

## Return Value

An `NSManagedObjectContextDidSaveObjectIDsNotification` notification.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

To merge the relevant changes into your view context, first obtain a notification by calling `objectIDNotification()` on the transaction. Then, pass the notification to [mergeChangesFromContextDidSaveNotification:](../nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md).
