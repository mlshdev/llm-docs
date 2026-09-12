> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811146-getindexentry](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811146-getindexentry)

# getIndexEntry

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getIndexEntry(
 intentry,
 UInt32 &value); 
```

## Parameters

- `entry`: on return, set to the entry value
- `value`: reference to variable to store the entry's value

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the index exists in the dictionary

<a id="overview"></a>

## Overview

Gets the entry at the specified index of the directory, as a raw UInt32.

## See Also

### Miscellaneous

- [getIndexKey](1811157-getindexkey.md)
- [getIndexType](1811166-getindextype.md)
- [getIndexValue](1811176-getindexvalue.md)
- [getKeySubdirectories](1811186-getkeysubdirectories.md)
- [getKeyType](1811199-getkeytype.md)
- [getKeyValue](1811212-getkeyvalue.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
