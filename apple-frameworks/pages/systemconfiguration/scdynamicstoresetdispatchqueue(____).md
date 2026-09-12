> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoresetdispatchqueue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoresetdispatchqueue(_:_:))

# SCDynamicStoreSetDispatchQueue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

## Declaration

```swift
func SCDynamicStoreSetDispatchQueue(_ store: SCDynamicStore, _ queue: dispatch_queue_t?) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `queue`: The dispatch queue on which to run the callback function. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if notifications were successfully initiated; otherwise, `FALSE`.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue(\_:\_:)](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetNotificationKeys(\_:\_:\_:)](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.

# SCDynamicStoreSetDispatchQueue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

## Declaration

```objectivec
Boolean SCDynamicStoreSetDispatchQueue(SCDynamicStoreRef store, dispatch_queue_t queue);
```

## Parameters

- `store`: The dynamic store session.
- `queue`: The dispatch queue on which to run the callback function. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if notifications were successfully initiated; otherwise, `FALSE`.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetNotificationKeys](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.
