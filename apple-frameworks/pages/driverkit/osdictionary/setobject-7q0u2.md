> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/setobject-7q0u2](https://developer.apple.com/documentation/driverkit/osdictionary/setobject-7q0u2)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Add or replace an object in the dictionary.

## Declaration

```objectivec
bool setObject(const char *aKey, const OSMetaClassBase *anObject);
```

## Parameters

- `aKey`: A c-string key. An OSString is created from aKey and used as the key for the dictionary.
- `anObject`: Object to be added to the dictionary.

<a id="return-value"></a>

## Return Value

True on success, which retains the object, or false on failure which does not retain the object.

<a id="Discussion"></a>

## Discussion

The object is added to the dictionary with the key object. If an object with the given key existed prior to the call it is replaced and released. The dictionary capacity will be grown if necessary.

## See Also

### Accessing Keys and Values

- [getObject](getobject-9ikoz.md): Returns a member of the dictionary.
- [getObject](getobject-8k3ie.md): Returns a member of the dictionary.
- [setObject](setobject-9b4z0.md): Add or replace an object in the dictionary.
- [removeObject](removeobject-25qm5.md): Remove an object by key from the dictionary.
- [removeObject](removeobject-156jh.md): Remove an object by key from the dictionary.
- [iterateObjects](iterateobjects-9h89s.md): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](iterateobjects-6cv0d.md): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](../osdictionaryiterateobjectsblock.md)
- [OSDictionaryIterateObjectsCallback](../osdictionaryiterateobjectscallback.md)
