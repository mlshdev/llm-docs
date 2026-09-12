> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/getobject-8k3ie](https://developer.apple.com/documentation/driverkit/osdictionary/getobject-8k3ie)

# getObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a member of the dictionary.

## Declaration

```objectivec
OSObject * getObject(const char *aKey) const;
```

## Parameters

- `aKey`: A c-string key. An OSString is created from aKey and used as the key for the dictionary.

<a id="return-value"></a>

## Return Value

Member at the given index or NULL if the index is greater or equal to the array count. The retain count of the result object is not incremented and the object should not be release by the caller.

<a id="Discussion"></a>

## Discussion

Looks up an existing object in the dictionary with the given key and returns it.

## See Also

### Accessing Keys and Values

- [getObject](getobject-9ikoz.md): Returns a member of the dictionary.
- [setObject](setobject-9b4z0.md): Add or replace an object in the dictionary.
- [setObject](setobject-7q0u2.md): Add or replace an object in the dictionary.
- [removeObject](removeobject-25qm5.md): Remove an object by key from the dictionary.
- [removeObject](removeobject-156jh.md): Remove an object by key from the dictionary.
- [iterateObjects](iterateobjects-9h89s.md): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](iterateobjects-6cv0d.md): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](../osdictionaryiterateobjectsblock.md)
- [OSDictionaryIterateObjectsCallback](../osdictionaryiterateobjectscallback.md)
