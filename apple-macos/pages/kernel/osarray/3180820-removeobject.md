> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180820-removeobject](https://developer.apple.com/documentation/kernel/osarray/3180820-removeobject)

# removeObject

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Removes a current member of the array.

## Declaration

```objectivec
void removeObject(uint32_t index);
```

```objectivec
virtual void removeObject(unsigned int index);
```

## Parameters

- `index`: Zero based index less than the array count of the object to remove.

<a id="discussion"></a>

## Discussion

Removes a current member of the array, shifting down all following members. The removed object is released.

## See Also

### Accessing Elements

- [getObject](3180816-getobject.md): Returns a member of the array.
- [getLastObject](3180814-getlastobject.md): Returns the last member of the array.
- [getNextIndexOfObject](3180815-getnextindexofobject.md): Searches the array for an object.
- [setObject](3180822-setobject.md): Appends an object as the last member of the array.
- [setObject](3433840-setobject.md): Sets an object as the member of the array at a given index.
- [iterateObjects](https://developer.apple.com/documentation/driverkit/osarray/iterateobjects): Iterates the array calling a callback block for each member.
- [replaceObject](3180821-replaceobject.md): Removes a current member of the array and replaces it with another object.
