> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osarray/flushcollection

# flushCollection

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes and drops references to all members of array.

## Declaration

```objectivec
virtual void flushCollection();
```

## See Also

### Creating an Array

- [withArray](witharray.md): Allocates an OSArray object with given members and preallocated capacity.
- [withCapacity](withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSArray object with given members and preallocated capacity.
- [OSArrayCreate](../osarraycreate.md)
- [merge](merge.md): Appends all members of an array to this array.
- [free](free.md)
