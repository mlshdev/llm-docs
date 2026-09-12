> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/witharray](https://developer.apple.com/documentation/driverkit/osarray/witharray)

# withArray

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSArray object with given members and preallocated capacity.

## Declaration

```objectivec
static OSArrayPtr withArray(const OSArray *array, uint32_t capacity);
```

## Parameters

- `array`: Array object containing members for the new array.
- `capacity`: Count of allocated capacity for members in array.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSArray with reference count 1 to be released by the caller.

## See Also

### Creating an Array

- [withCapacity](withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSArray object with given members and preallocated capacity.
- [OSArrayCreate](../osarraycreate.md)
- [merge](merge.md): Appends all members of an array to this array.
- [free](free.md)
- [flushCollection](flushcollection.md): Removes and drops references to all members of array.
