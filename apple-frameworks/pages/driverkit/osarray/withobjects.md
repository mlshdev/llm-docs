> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/withobjects](https://developer.apple.com/documentation/driverkit/osarray/withobjects)

# withObjects

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSArray object with given members and preallocated capacity.

## Declaration

```objectivec
static OSArrayPtr withObjects(const OSObject **values, uint32_t count, uint32_t capacity);
```

## Parameters

- `values`: C-array pointer to members for the array.
- `count`: Count of members being added to the array.
- `capacity`: Count of allocated capacity for members in array.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSArray with reference count 1 to be released by the caller.

## See Also

### Creating an Array

- [withArray](witharray.md): Allocates an OSArray object with given members and preallocated capacity.
- [withCapacity](withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [OSArrayCreate](../osarraycreate.md)
- [merge](merge.md): Appends all members of an array to this array.
- [free](free.md)
- [flushCollection](flushcollection.md): Removes and drops references to all members of array.
