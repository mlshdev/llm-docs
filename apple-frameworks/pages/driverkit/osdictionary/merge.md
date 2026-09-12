> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/merge](https://developer.apple.com/documentation/driverkit/osdictionary/merge)

# merge

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Adds all members of a dictionary to this dictionary.

## Declaration

```objectivec
bool merge(const OSDictionary *otherDictionary);
```

## Parameters

- `otherDictionary`: All members of thie dictionary will be added to the array.

<a id="return-value"></a>

## Return Value

True on success, which retains all the added objects, or false on failure which does not retain the objects.

<a id="Discussion"></a>

## Discussion

Adds all members of a dictionary to this dictionary. Any keys in the dictionary that exist will be replaced. The dictionary capacity will be grown if necessary.

## See Also

### Creating a Dictionary

- [withCapacity](withcapacity.md): Allocates an OSDictionary object with preallocated capacity.
- [withDictionary](withdictionary.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [withObjects](withobjects.md): Allocates an OSDictionary object with given members and preallocated capacity.
- [OSDictionaryCreate](../osdictionarycreate.md)
- [free](free.md)
- [flushCollection](flushcollection.md): Removes and drops references to all members of dictionary.
