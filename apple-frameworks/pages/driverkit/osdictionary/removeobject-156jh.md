> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/removeobject-156jh](https://developer.apple.com/documentation/driverkit/osdictionary/removeobject-156jh)

# removeObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Remove an object by key from the dictionary.

## Declaration

```objectivec
void removeObject(const char *aKey);
```

## Parameters

- `aKey`: A c-string key. An OSString is created from aKey and used as the key for the dictionary.

<a id="Discussion"></a>

## Discussion

An object in the dictionary with the given key object is removed and released.

## See Also

### Accessing Keys and Values

- [getObject](getobject-9ikoz.md): Returns a member of the dictionary.
- [getObject](getobject-8k3ie.md): Returns a member of the dictionary.
- [setObject](setobject-9b4z0.md): Add or replace an object in the dictionary.
- [setObject](setobject-7q0u2.md): Add or replace an object in the dictionary.
- [removeObject](removeobject-25qm5.md): Remove an object by key from the dictionary.
- [iterateObjects](iterateobjects-9h89s.md): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](iterateobjects-6cv0d.md): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](../osdictionaryiterateobjectsblock.md)
- [OSDictionaryIterateObjectsCallback](../osdictionaryiterateobjectscallback.md)
