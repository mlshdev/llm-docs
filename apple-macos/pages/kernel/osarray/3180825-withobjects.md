> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180825-withobjects](https://developer.apple.com/documentation/kernel/osarray/3180825-withobjects)

# withObjects

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSArray object with given members and preallocated capacity.

## Declaration

```objectivec
static OSArrayPtr withObjects(const OSObject **values, uint32_t count, uint32_t capacity);
```

```objectivec
static OSPtr<OSArray> withObjects(const OSObject *objects[], unsigned int count, unsigned int capacity);
```

## Parameters

- `values`: C-array pointer to members for the array.
- `count`: Count of members being added to the array.
- `capacity`: Count of allocated capacity for members in array.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSArray with reference count 1 to be released by the caller.

## See Also

### Creating an Array

- [withArray](3180823-witharray.md): Allocates an OSArray object with given members and preallocated capacity.
- [withCapacity](3180824-withcapacity.md): Allocates an OSArray object with preallocated capacity.
- [merge](3180819-merge.md): Appends all members of an array to this array.
- [free](3180811-free.md)
- [flushCollection](3180810-flushcollection.md): Removes and drops references to all members of array.
