> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3180901-getobject](https://developer.apple.com/documentation/kernel/osdictionary/3180901-getobject)

# getObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns a member of the dictionary.

## Declaration

```objectivec
OSObject * getObject(const OSObject *aKey);
```

```objectivec
virtual OSObject * getObject(const OSString *aKey);
```

## Parameters

- `aKey`: An object pointer used to lookup the object. The key should be uniqued within the dictionary. Usually an OSString is passed as the key.

<a id="return_value"></a>

## Return Value

Member at the given index or NULL if the index is greater or equal to the array count. The retain count of the result object is not incremented and the object should not be release by the caller.

<a id="discussion"></a>

## Discussion

Looks up an existing object in the dictionary with the given key and returns it.

## See Also

### Accessing Keys and Values

- [getObject](3433846-getobject.md): Returns a member of the dictionary.
- [setObject](3180906-setobject.md): Add or replace an object in the dictionary.
- [setObject](3433850-setobject.md): Add or replace an object in the dictionary.
- [removeObject](3180905-removeobject.md): Remove an object by key from the dictionary.
- [removeObject](3433849-removeobject.md): Remove an object by key from the dictionary.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osdictionary/iterateobjects-9h89s): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osdictionary/iterateobjects-6cv0d): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](https://developer.apple.com/documentation/driverkit/osdictionaryiterateobjectsblock)
- [OSDictionaryIterateObjectsCallback](https://developer.apple.com/documentation/driverkit/osdictionaryiterateobjectscallback)
