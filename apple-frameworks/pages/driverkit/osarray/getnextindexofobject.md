> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/getnextindexofobject](https://developer.apple.com/documentation/driverkit/osarray/getnextindexofobject)

# getNextIndexOfObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Searches the array for an object.

## Declaration

```objectivec
uint32_t getNextIndexOfObject(const OSMetaClassBase *anObject, uint32_t index) const;
```

## Parameters

- `anObject`: The object to search for.
- `index`: Zero based index less than the array count to begin the search.

<a id="return-value"></a>

## Return Value

Index at which the object was found, or -1U if the member was not found in the array after the index parameter.

<a id="Discussion"></a>

## Discussion

Beginning at the passed index, iterate the array until the object instance is found or there are no more members. The search is done by pointer equality.

## See Also

### Accessing Elements

- [getObject](getobject.md): Returns a member of the array.
- [getLastObject](getlastobject.md): Returns the last member of the array.
- [setObject](setobject-3bore.md): Appends an object as the last member of the array.
- [setObject](setobject-4ys3x.md): Sets an object as the member of the array at a given index.
- [iterateObjects](iterateobjects.md): Iterates the array calling a callback block for each member.
- [replaceObject](replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](removeobject.md): Removes a current member of the array.
- [OSArrayAppendValue](../osarrayappendvalue.md)
- [OSArrayReplaceValue](../osarrayreplacevalue.md)
