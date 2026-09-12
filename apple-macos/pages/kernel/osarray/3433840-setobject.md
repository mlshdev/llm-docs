> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3433840-setobject](https://developer.apple.com/documentation/kernel/osarray/3433840-setobject)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Sets an object as the member of the array at a given index.

## Declaration

```objectivec
bool setObject(uint32_t index, const OSMetaClassBase *anObject);
```

```objectivec
virtual bool setObject(unsigned int index, const OSMetaClassBase *anObject);
```

## Parameters

- `index`: Zero based index less than or equal to the array count to add the object.
- `anObject`: Object to be added to the array.

<a id="return_value"></a>

## Return Value

true on success, which retains the object, or false on failure which does not retain the object.

<a id="discussion"></a>

## Discussion

Sets an object as the member of the array at a given index. The array capacity will be grown if necessary.

## See Also

### Accessing Elements

- [getObject](3180816-getobject.md): Returns a member of the array.
- [getLastObject](3180814-getlastobject.md): Returns the last member of the array.
- [getNextIndexOfObject](3180815-getnextindexofobject.md): Searches the array for an object.
- [setObject](3180822-setobject.md): Appends an object as the last member of the array.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osarray/iterateobjects): Iterates the array calling a callback block for each member.
- [replaceObject](3180821-replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](3180820-removeobject.md): Removes a current member of the array.
