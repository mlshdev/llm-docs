> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopyvalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopyvalue(_:_:))

# SCDynamicStoreCopyValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the value associated with the specified key.

## Declaration

```swift
func SCDynamicStoreCopyValue(_ store: SCDynamicStore?, _ key: CFString) -> CFPropertyList?
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key associated with the desired value.

<a id="return-value"></a>

## Return Value

The value associated with the specified key, or `NULL` if no value was located or if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList(\_:\_:)](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyMultiple(\_:\_:\_:)](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys(\_:)](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.

# SCDynamicStoreCopyValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the value associated with the specified key.

## Declaration

```objectivec
CFPropertyListRefSCDynamicStoreCopyValue(SCDynamicStoreRef store, CFStringRef key);
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key associated with the desired value.

<a id="return-value"></a>

## Return Value

The value associated with the specified key, or `NULL` if no value was located or if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyMultiple](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
