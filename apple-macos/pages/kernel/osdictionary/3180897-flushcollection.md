> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3180897-flushcollection](https://developer.apple.com/documentation/kernel/osdictionary/3180897-flushcollection)

# flushCollection

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Removes and drops references to all members of dictionary.

## Declaration

```objectivec
virtual void flushCollection(void);
```

## See Also

### Creating a Dictionary

- [withCapacity](3180907-withcapacity.md): Allocates an OSDictionary object with preallocated capacity.
- [withDictionary](3180908-withdictionary.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [withObjects](3180909-withobjects.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [merge](3180904-merge.md): Adds all members of a dictionary to this dictionary.
- [free](3180898-free.md)
