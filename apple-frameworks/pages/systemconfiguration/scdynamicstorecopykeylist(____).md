> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopykeylist(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopykeylist(_:_:))

# SCDynamicStoreCopyKeyList(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the keys that represent the current dynamic store entries that match the specified pattern.

## Declaration

```swift
func SCDynamicStoreCopyKeyList(_ store: SCDynamicStore?, _ pattern: CFString) -> CFArray?
```

## Parameters

- `store`: The dynamic store session.
- `pattern`: A regex(3) regular expression pattern used to match the dynamic store keys.

<a id="return-value"></a>

## Return Value

An array of matching keys, or `NULL` if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyMultiple(\_:\_:\_:)](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys(\_:)](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue(\_:\_:)](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.

# SCDynamicStoreCopyKeyList (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the keys that represent the current dynamic store entries that match the specified pattern.

## Declaration

```objectivec
CFArrayRefSCDynamicStoreCopyKeyList(SCDynamicStoreRef store, CFStringRef pattern);
```

## Parameters

- `store`: The dynamic store session.
- `pattern`: A regex(3) regular expression pattern used to match the dynamic store keys.

<a id="return-value"></a>

## Return Value

An array of matching keys, or `NULL` if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyMultiple](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.
