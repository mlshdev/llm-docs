> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/getlastobject](https://developer.apple.com/documentation/driverkit/osarray/getlastobject)

# getLastObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the last member of the array.

## Declaration

```objectivec
OSObject * getLastObject() const;
```

<a id="return-value"></a>

## Return Value

Member at the last index or NULL if array has no members.

<a id="Discussion"></a>

## Discussion

If the array has non-zero count the member at the last index is returned, with no additional retain count (the caller should not release). Otherwise NULL.

## See Also

### Accessing Elements

- [getObject](getobject.md): Returns a member of the array.
- [getNextIndexOfObject](getnextindexofobject.md): Searches the array for an object.
- [setObject](setobject-3bore.md): Appends an object as the last member of the array.
- [setObject](setobject-4ys3x.md): Sets an object as the member of the array at a given index.
- [iterateObjects](iterateobjects.md): Iterates the array calling a callback block for each member.
- [replaceObject](replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](removeobject.md): Removes a current member of the array.
- [OSArrayAppendValue](../osarrayappendvalue.md)
- [OSArrayReplaceValue](../osarrayreplacevalue.md)
