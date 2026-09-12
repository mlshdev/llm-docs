> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionaryiterateobjectsblock](https://developer.apple.com/documentation/driverkit/osdictionaryiterateobjectsblock)

# OSDictionaryIterateObjectsBlock

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef _Bool (^)(class OSObject *, class OSObject *) OSDictionaryIterateObjectsBlock;
```

## See Also

### Accessing Keys and Values

- [getObject](osdictionary/getobject-9ikoz.md): Returns a member of the dictionary.
- [getObject](osdictionary/getobject-8k3ie.md): Returns a member of the dictionary.
- [setObject](osdictionary/setobject-9b4z0.md): Add or replace an object in the dictionary.
- [setObject](osdictionary/setobject-7q0u2.md): Add or replace an object in the dictionary.
- [removeObject](osdictionary/removeobject-25qm5.md): Remove an object by key from the dictionary.
- [removeObject](osdictionary/removeobject-156jh.md): Remove an object by key from the dictionary.
- [iterateObjects](osdictionary/iterateobjects-9h89s.md): Iterates the dictionary calling a callback block for each member.
- [iterateObjects](osdictionary/iterateobjects-6cv0d.md): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsCallback](osdictionaryiterateobjectscallback.md)
