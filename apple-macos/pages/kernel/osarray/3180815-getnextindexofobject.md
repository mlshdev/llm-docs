> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180815-getnextindexofobject](https://developer.apple.com/documentation/kernel/osarray/3180815-getnextindexofobject)

# getNextIndexOfObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Searches the array for an object.

## Declaration

```objectivec
uint32_t getNextIndexOfObject(const OSMetaClassBase *anObject, uint32_t index);
```

```objectivec
virtual unsigned int getNextIndexOfObject(const OSMetaClassBase *anObject, unsigned int index);
```

## Parameters

- `index`: Zero based index less than the array count to begin the search.

<a id="return_value"></a>

## Return Value

Index at which the object was found, or -1U if the member was not found in the array after the index parameter.

<a id="discussion"></a>

## Discussion

Beginning at the passed index, iterate the array until the object instance is found or there are no more members. The search is done by pointer equality.

## See Also

### Accessing Elements

- [getObject](3180816-getobject.md): Returns a member of the array.
- [getLastObject](3180814-getlastobject.md): Returns the last member of the array.
- [setObject](3180822-setobject.md): Appends an object as the last member of the array.
- [setObject](3433840-setobject.md): Sets an object as the member of the array at a given index.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osarray/iterateobjects): Iterates the array calling a callback block for each member.
- [replaceObject](3180821-replaceobject.md): Removes a current member of the array and replaces it with another object.
- [removeObject](3180820-removeobject.md): Removes a current member of the array.
