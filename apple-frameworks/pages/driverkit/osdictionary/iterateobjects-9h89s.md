> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/iterateobjects-9h89s](https://developer.apple.com/documentation/driverkit/osdictionary/iterateobjects-9h89s)

# iterateObjects

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Iterates the dictionary calling a callback block for each member.

## Declaration

```objectivec
bool iterateObjects(OSDictionaryIterateObjectsBlock block) const;
```

## Parameters

- `block`: The block to invoke.

<a id="return-value"></a>

## Return Value

False if the callback block returned false, otherwise true (including if the dictionary is empty).

<a id="Discussion"></a>

## Discussion

Calls the block with each value in the dictionary. The block must not modify the dictionary during iteration. If the block returns true the iteration continues for all members, returning false halts the iteration early.

## See Also

### Accessing Keys and Values

- [getObject](getobject-9ikoz.md): Returns a member of the dictionary.
- [getObject](getobject-8k3ie.md): Returns a member of the dictionary.
- [setObject](setobject-9b4z0.md): Add or replace an object in the dictionary.
- [setObject](setobject-7q0u2.md): Add or replace an object in the dictionary.
- [removeObject](removeobject-25qm5.md): Remove an object by key from the dictionary.
- [removeObject](removeobject-156jh.md): Remove an object by key from the dictionary.
- [iterateObjects](iterateobjects-6cv0d.md): Iterates the dictionary calling a callback block for each member.
- [OSDictionaryIterateObjectsBlock](../osdictionaryiterateobjectsblock.md)
- [OSDictionaryIterateObjectsCallback](../osdictionaryiterateobjectscallback.md)
