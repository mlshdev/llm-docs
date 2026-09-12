> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopymultiple(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopymultiple(_:_:_:))

# SCDynamicStoreCopyMultiple(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the key-value pairs that match the specified keys and key patterns.

## Declaration

```swift
func SCDynamicStoreCopyMultiple(_ store: SCDynamicStore?, _ keys: CFArray?, _ patterns: CFArray?) -> CFDictionary?
```

## Parameters

- `store`: The dynamic store session.
- `keys`: The keys associated with the desired values or `NULL` if no specific keys are requested.
- `patterns`: An array of regex(3) pattern strings used to match the keys, or `NULL` if no key patterns are requested.

<a id="return-value"></a>

## Return Value

A dictionary of key-value pairs that match the specified keys and key patterns, or `NULL` if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList(\_:\_:)](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyNotifiedKeys(\_:)](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue(\_:\_:)](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.

# SCDynamicStoreCopyMultiple (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the key-value pairs that match the specified keys and key patterns.

## Declaration

```objectivec
CFDictionaryRefSCDynamicStoreCopyMultiple(SCDynamicStoreRef store, CFArrayRef keys, CFArrayRef patterns);
```

## Parameters

- `store`: The dynamic store session.
- `keys`: The keys associated with the desired values or `NULL` if no specific keys are requested.
- `patterns`: An array of regex(3) pattern strings used to match the keys, or `NULL` if no key patterns are requested.

<a id="return-value"></a>

## Return Value

A dictionary of key-value pairs that match the specified keys and key patterns, or `NULL` if an error occurred. You must release the returned value.

## See Also

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyNotifiedKeys](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.
