> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3180906-setobject](https://developer.apple.com/documentation/kernel/osdictionary/3180906-setobject)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Add or replace an object in the dictionary.

## Declaration

```objectivec
bool setObject(const OSObject *aKey, const OSMetaClassBase *anObject);
```

```objectivec
virtual bool setObject(const OSString *aKey, const OSMetaClassBase *anObject);
```

## Parameters

- `aKey`: An object pointer used to lookup the object. The key should be uniqued within the dictionary. Usually an OSString is passed as the key.
- `anObject`: Object to be added to the dictionary.

<a id="return_value"></a>

## Return Value

true on success, which retains the object, or false on failure which does not retain the object.

<a id="discussion"></a>

## Discussion

The object is added to the dictionary with the key object. If an object with the given key existed prior to the call it is replaced and released. The dictionary capacity will be grown if necessary.

## See Also

### Accessing Keys and Values

- [getObject](3180901-getobject.md): Returns a member of the dictionary.
- [getObject](3433846-getobject.md): Returns a member of the dictionary.
- [setObject](3433850-setobject.md): Add or replace an object in the dictionary.
- [removeObject](3180905-removeobject.md): Remove an object by key from the dictionary.
- [removeObject](3433849-removeobject.md): Remove an object by key from the dictionary.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osdictionary/iterateobjects-9h89s): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osdictionary/iterateobjects-6cv0d): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](https://developer.apple.com/documentation/driverkit/osdictionaryiterateobjectsblock)
- [OSDictionaryIterateObjectsCallback](https://developer.apple.com/documentation/driverkit/osdictionaryiterateobjectscallback)
