> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/setobject-3bore](https://developer.apple.com/documentation/driverkit/osarray/setobject-3bore)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Appends an object as the last member of the array.

## Declaration

```objectivec
bool setObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: Object to be added as the last member of the array.

<a id="return-value"></a>

## Return Value

True on success, which retains the object, or false on failure which does not retain the object.

<a id="Discussion"></a>

## Discussion

Appends an object as the last member of the array. The array capacity will be grown if necessary.

## See Also

### Accessing Elements

- [getObject](getobject.md): Returns a member of the array.
- [getLastObject](getlastobject.md): Returns the last member of the array.
- [getNextIndexOfObject](getnextindexofobject.md): Searches the array for an object.
- [setObject](setobject-4ys3x.md): Sets an object as the member of the array at a given index.
- [iterateObjects](iterateobjects.md): Iterates the array calling a callback block for each member.
- [replaceObject](replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](removeobject.md): Removes a current member of the array.
- [OSArrayAppendValue](../osarrayappendvalue.md)
- [OSArrayReplaceValue](../osarrayreplacevalue.md)
