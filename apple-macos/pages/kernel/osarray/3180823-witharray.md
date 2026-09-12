> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180823-witharray](https://developer.apple.com/documentation/kernel/osarray/3180823-witharray)

# withArray

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSArray object with given members and preallocated capacity.

## Declaration

```objectivec
static OSArrayPtr withArray(const OSArray *array, uint32_t capacity);
```

```objectivec
static OSPtr<OSArray> withArray(const OSArray *array, unsigned int capacity);
```

## Parameters

- `array`: Array object containing members for the new array.
- `capacity`: Count of allocated capacity for members in array.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSArray with reference count 1 to be released by the caller.

## See Also

### Creating an Array

- [withCapacity](3180824-withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [withObjects](3180825-withobjects.md): Allocates an OSArray object with given members and preallocated capacity.
- [merge](3180819-merge.md): Appends all members of an array to this array.
- [free](3180811-free.md)
- [flushCollection](3180810-flushcollection.md): Removes and drops references to all members of array.
