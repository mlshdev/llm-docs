> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/withcapacity](https://developer.apple.com/documentation/driverkit/osdictionary/withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSDictionary object with preallocated capacity.

## Declaration

```objectivec
static OSDictionaryPtr withCapacity(uint32_t capacity);
```

## Parameters

- `capacity`: Count of allocated capacity for members in dictionary.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSDictionary with reference count 1 to be released by the caller.

## See Also

### Creating a Dictionary

- [withDictionary](withdictionary.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [OSDictionaryCreate](../osdictionarycreate.md)
- [merge](merge.md): Adds all members of a dictionary to this dictionary.
- [free](free.md)
- [flushCollection](flushcollection.md): Removes and drops references to all members of dictionary.
