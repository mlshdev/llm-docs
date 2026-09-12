> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoresetnotificationkeys(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoresetnotificationkeys(_:_:_:))

# SCDynamicStoreSetNotificationKeys(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Specifies a set of keys and key patterns that should be monitored for changes.

## Declaration

```swift
func SCDynamicStoreSetNotificationKeys(_ store: SCDynamicStore, _ keys: CFArray?, _ patterns: CFArray?) -> Bool
```

## Parameters

- `store`: The dynamic store session being watched.
- `keys`: An array of keys to be monitored or `NULL` if no specific keys are to be monitored.
- `patterns`: An array of regex(3) pattern strings used to match keys to be monitored or `NULL` if no key patterns are to be monitored.

<a id="return-value"></a>

## Return Value

`TRUE` if the set of notification keys and patterns was successfully updated; otherwise, `FALSE`.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue(\_:\_:)](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetDispatchQueue(\_:\_:)](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

# SCDynamicStoreSetNotificationKeys (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Specifies a set of keys and key patterns that should be monitored for changes.

## Declaration

```objectivec
Boolean SCDynamicStoreSetNotificationKeys(SCDynamicStoreRef store, CFArrayRef keys, CFArrayRef patterns);
```

## Parameters

- `store`: The dynamic store session being watched.
- `keys`: An array of keys to be monitored or `NULL` if no specific keys are to be monitored.
- `patterns`: An array of regex(3) pattern strings used to match keys to be monitored or `NULL` if no key patterns are to be monitored.

<a id="return-value"></a>

## Return Value

`TRUE` if the set of notification keys and patterns was successfully updated; otherwise, `FALSE`.

## See Also

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetDispatchQueue](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.
