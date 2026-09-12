> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180814-getlastobject](https://developer.apple.com/documentation/kernel/osarray/3180814-getlastobject)

# getLastObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the last member of the array.

## Declaration

```objectivec
OSObject * getLastObject(void);
```

```objectivec
virtual OSObject * getLastObject(void);
```

<a id="return_value"></a>

## Return Value

Member at the last index or NULL if array has no members.

<a id="discussion"></a>

## Discussion

If the array has non-zero count the member at the last index is returned, with no additional retain count (the caller should not release). Otherwise NULL.

## See Also

### Accessing Elements

- [getObject](3180816-getobject.md): Returns a member of the array.
- [getNextIndexOfObject](3180815-getnextindexofobject.md): Searches the array for an object.
- [setObject](3180822-setobject.md): Appends an object as the last member of the array.
- [setObject](3433840-setobject.md): Sets an object as the member of the array at a given index.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osarray/iterateobjects): Iterates the array calling a callback block for each member.
- [replaceObject](3180821-replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](3180820-removeobject.md): Removes a current member of the array.
