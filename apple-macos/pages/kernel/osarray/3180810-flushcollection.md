> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180810-flushcollection](https://developer.apple.com/documentation/kernel/osarray/3180810-flushcollection)

# flushCollection

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Removes and drops references to all members of array.

## Declaration

```objectivec
virtual void flushCollection(void);
```

## See Also

### Creating an Array

- [withArray](3180823-witharray.md): Allocates an OSArray object with given members and preallocated capacity.
- [withCapacity](3180824-withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [withObjects](3180825-withobjects.md): Allocates an OSArray object with given members and preallocated capacity.
- [merge](3180819-merge.md): Appends all members of an array to this array.
- [free](3180811-free.md)
