> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoreaddvalue(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoreaddvalue(_:_:_:))

# SCDynamicStoreAddValue(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Adds the specified key-value pair to the dynamic store, if no such key already exists.

## Declaration

```swift
func SCDynamicStoreAddValue(_ store: SCDynamicStore?, _ key: CFString, _ value: CFPropertyList) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key of the value to add to the dynamic store.
- `value`: The value to add to the dynamic store.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was added; `FALSE` if the key was already present in the dynamic store or if an error occurred.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue(\_:\_:\_:)](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple(\_:\_:\_:\_:)](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.
- [SCDynamicStoreSetValue(\_:\_:\_:)](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.

# SCDynamicStoreAddValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Adds the specified key-value pair to the dynamic store, if no such key already exists.

## Declaration

```objectivec
Boolean SCDynamicStoreAddValue(SCDynamicStoreRef store, CFStringRef key, CFPropertyListRef value);
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key of the value to add to the dynamic store.
- `value`: The value to add to the dynamic store.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was added; `FALSE` if the key was already present in the dynamic store or if an error occurred.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.
- [SCDynamicStoreSetValue](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.
