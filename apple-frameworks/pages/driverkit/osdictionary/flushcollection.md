> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdictionary/flushcollection

# flushCollection

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes and drops references to all members of dictionary.

## Declaration

```objectivec
virtual void flushCollection();
```

## See Also

### Creating a Dictionary

- [withCapacity](withcapacity.md): Allocates an OSDictionary object with preallocated capacity.
- [withDictionary](withdictionary.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [OSDictionaryCreate](../osdictionarycreate.md)
- [merge](merge.md): Adds all members of a dictionary to this dictionary.
- [free](free.md)
