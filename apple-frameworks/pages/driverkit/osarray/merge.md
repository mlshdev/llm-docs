> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/merge](https://developer.apple.com/documentation/driverkit/osarray/merge)

# merge

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Appends all members of an array to this array.

## Declaration

```objectivec
bool merge(const OSArray *otherArray);
```

## Parameters

- `otherArray`: All members of thie array will be appended to the array.

<a id="return-value"></a>

## Return Value

True on success, which retains all the added objects, or false on failure which does not retain the objects.

<a id="Discussion"></a>

## Discussion

Appends all members of an array to this array. The array capacity will be grown if necessary.

## See Also

### Creating an Array

- [withArray](witharray.md): Allocates an OSArray object with given members and preallocated capacity.
- [withCapacity](withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSArray object with given members and preallocated capacity.
- [OSArrayCreate](../osarraycreate.md)
- [free](free.md)
- [flushCollection](flushcollection.md): Removes and drops references to all members of array.
