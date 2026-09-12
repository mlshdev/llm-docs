> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoreremovevalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoreremovevalue(_:_:))

# SCDynamicStoreRemoveValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the value of the specified key from the dynamic store.

## Declaration

```swift
func SCDynamicStoreRemoveValue(_ store: SCDynamicStore?, _ key: CFString) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key of the value to remove.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was removed; `FALSE` if no value was located or an error occurred.

# SCDynamicStoreRemoveValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the value of the specified key from the dynamic store.

## Declaration

```objectivec
Boolean SCDynamicStoreRemoveValue(SCDynamicStoreRef store, CFStringRef key);
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key of the value to remove.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was removed; `FALSE` if no value was located or an error occurred.
