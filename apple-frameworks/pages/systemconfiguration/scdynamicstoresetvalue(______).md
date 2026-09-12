> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstoresetvalue(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstoresetvalue(_:_:_:))

# SCDynamicStoreSetValue(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Adds or replaces a value in the dynamic store for the specified key.

## Declaration

```swift
func SCDynamicStoreSetValue(_ store: SCDynamicStore?, _ key: CFString, _ value: CFPropertyList) -> Bool
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key associated with the value.
- `value`: The value to add to or replace in the dynamic store.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was updated; otherwise, `FALSE`.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue(\_:\_:\_:)](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue(\_:\_:\_:)](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple(\_:\_:\_:\_:)](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.

# SCDynamicStoreSetValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Adds or replaces a value in the dynamic store for the specified key.

## Declaration

```objectivec
Boolean SCDynamicStoreSetValue(SCDynamicStoreRef store, CFStringRef key, CFPropertyListRef value);
```

## Parameters

- `store`: The dynamic store session.
- `key`: The key associated with the value.
- `value`: The value to add to or replace in the dynamic store.

<a id="return-value"></a>

## Return Value

`TRUE` if the key was updated; otherwise, `FALSE`.

## See Also

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.
