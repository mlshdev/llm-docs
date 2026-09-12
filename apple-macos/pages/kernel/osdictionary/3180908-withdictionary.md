> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3180908-withdictionary](https://developer.apple.com/documentation/kernel/osdictionary/3180908-withdictionary)

# withDictionary

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSDictionary object with given members and preallocated capacity.

## Declaration

```objectivec
static OSDictionaryPtr withDictionary(const OSDictionary *dictionary, uint32_t capacity);
```

```objectivec
static OSPtr<OSDictionary> withDictionary(const OSDictionary *dict, unsigned int capacity);
```

## Parameters

- `dictionary`: Dictionary object containing members for the new dictionary.
- `capacity`: Count of allocated capacity for members in array.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSDictionary with reference count 1 to be released by the caller.

## See Also

### Creating a Dictionary

- [withCapacity](3180907-withcapacity.md): Allocates an OSDictionary object with preallocated capacity.
- [withObjects](3180909-withobjects.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [merge](3180904-merge.md): Adds all members of a dictionary to this dictionary.
- [free](3180898-free.md)
- [flushCollection](3180897-flushcollection.md): Removes and drops references to all members of dictionary.
