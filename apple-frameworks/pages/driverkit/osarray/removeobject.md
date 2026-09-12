> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/removeobject](https://developer.apple.com/documentation/driverkit/osarray/removeobject)

# removeObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes a current member of the array.

## Declaration

```objectivec
void removeObject(uint32_t index);
```

## Parameters

- `index`: Zero based index less than the array count of the object to remove.

<a id="Discussion"></a>

## Discussion

Removes a current member of the array, shifting down all following members. The removed object is released.

## See Also

### Accessing Elements

- [getObject](getobject.md): Returns a member of the array.
- [getLastObject](getlastobject.md): Returns the last member of the array.
- [getNextIndexOfObject](getnextindexofobject.md): Searches the array for an object.
- [setObject](setobject-3bore.md): Appends an object as the last member of the array.
- [setObject](setobject-4ys3x.md): Sets an object as the member of the array at a given index.
- [iterateObjects](iterateobjects.md): Iterates the array calling a callback block for each member.
- [replaceObject](replaceobject.md): Removes a current member of the array and replaces it with another object.
- [OSArrayAppendValue](../osarrayappendvalue.md)
- [OSArrayReplaceValue](../osarrayreplacevalue.md)
