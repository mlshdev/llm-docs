> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/replaceobject](https://developer.apple.com/documentation/driverkit/osarray/replaceobject)

# replaceObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes a current member of the array and replaces it with another object.

## Declaration

```objectivec
bool replaceObject(uint32_t index, const OSMetaClassBase *anObject);
```

## Parameters

- `index`: Zero based index less than the array count to add the object.
- `anObject`: Object to be added to the array.

<a id="return-value"></a>

## Return Value

True on success, which retains the added object and releases the current member, or false on failure which does not retain the object and leaves the current member.

## See Also

### Accessing Elements

- [getObject](getobject.md): Returns a member of the array.
- [getLastObject](getlastobject.md): Returns the last member of the array.
- [getNextIndexOfObject](getnextindexofobject.md): Searches the array for an object.
- [setObject](setobject-3bore.md): Appends an object as the last member of the array.
- [setObject](setobject-4ys3x.md): Sets an object as the member of the array at a given index.
- [iterateObjects](iterateobjects.md): Iterates the array calling a callback block for each member.
- [removeObject](removeobject.md): Removes a current member of the array.
- [OSArrayAppendValue](../osarrayappendvalue.md)
- [OSArrayReplaceValue](../osarrayreplacevalue.md)
