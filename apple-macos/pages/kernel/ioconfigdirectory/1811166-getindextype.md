> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811166-getindextype](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811166-getindextype)

# getIndexType

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getIndexType(
 int index,
 IOConfigKeyType &type); 
```

## Parameters

- `type`: on return, set to the data type

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the index exists in the dictionary

<a id="overview"></a>

## Overview

Gets the data type for entry at the specified index

## See Also

### Miscellaneous

- [getIndexEntry](1811146-getindexentry.md)
- [getIndexKey](1811157-getindexkey.md)
- [getIndexValue](1811176-getindexvalue.md)
- [getKeySubdirectories](1811186-getkeysubdirectories.md)
- [getKeyType](1811199-getkeytype.md)
- [getKeyValue](1811212-getkeyvalue.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
