> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoresetmultiple(_:_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoresetmultiple(_:_:_:_:))

# SCDynamicStoreSetMultiple(\_:\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Updates multiple values in the dynamic store.

## Declaration

```swift
func SCDynamicStoreSetMultiple(_ store: SCDynamicStore?, _ keysToSet: CFDictionary?, _ keysToRemove: CFArray?, _ keysToNotify: CFArray?) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `keysToSet`: A dictionary of key-value pairs to add to the dynamic store.
- `keysToRemove`: An array of keys to remove from the dynamic store.
- `keysToNotify`: An array of keys to flag as changed (without changing their values).

<a id="return-value"></a>

## Return Value

`TRUE` if the dynamic store updates were successful; otherwise, `FALSE`.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue(\_:\_:\_:)](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue(\_:\_:\_:)](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetValue(\_:\_:\_:)](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.

# SCDynamicStoreSetMultiple (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Updates multiple values in the dynamic store.

## Declaration

```objectivec
Boolean SCDynamicStoreSetMultiple(SCDynamicStoreRef store, CFDictionaryRef keysToSet, CFArrayRef keysToRemove, CFArrayRef keysToNotify);
```

## Parameters

- `store`: The dynamic store session.
- `keysToSet`: A dictionary of key-value pairs to add to the dynamic store.
- `keysToRemove`: An array of keys to remove from the dynamic store.
- `keysToNotify`: An array of keys to flag as changed (without changing their values).

<a id="return-value"></a>

## Return Value

`TRUE` if the dynamic store updates were successful; otherwise, `FALSE`.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetValue](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.
