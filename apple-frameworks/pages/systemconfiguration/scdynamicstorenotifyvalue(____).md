> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorenotifyvalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorenotifyvalue(_:_:))

# SCDynamicStoreNotifyValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Causes a notification to be delivered for the specified key in the dynamic store.

## Declaration

```swift
func SCDynamicStoreNotifyValue(_ store: SCDynamicStore?, _ key: CFString) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key that should be flagged as changed. All dynamic store sessions that are monitoring this key will receive a notification. Note that the key’s value is not updated.

<a id="return-value"></a>

## Return Value

`TRUE` if the notification was processed; `FALSE` if an error occurred.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreSetNotificationKeys(\_:\_:\_:)](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.
- [SCDynamicStoreSetDispatchQueue(\_:\_:)](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

# SCDynamicStoreNotifyValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Causes a notification to be delivered for the specified key in the dynamic store.

## Declaration

```objectivec
Boolean SCDynamicStoreNotifyValue(SCDynamicStoreRef store, CFStringRef key);
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key that should be flagged as changed. All dynamic store sessions that are monitoring this key will receive a notification. Note that the key’s value is not updated.

<a id="return-value"></a>

## Return Value

`TRUE` if the notification was processed; `FALSE` if an error occurred.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreSetNotificationKeys](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.
- [SCDynamicStoreSetDispatchQueue](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.
