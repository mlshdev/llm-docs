> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811199-getkeytype](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811199-getkeytype)

# getKeyType

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getKeyType(
 int key,
 IOConfigKeyType &type); 
```

## Parameters

- `type`: on return, set to the data type

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the key exists in the dictionary

<a id="overview"></a>

## Overview

Gets the data type for the specified key

## See Also

### Miscellaneous

- [getIndexEntry](1811146-getindexentry.md)
- [getIndexKey](1811157-getindexkey.md)
- [getIndexType](1811166-getindextype.md)
- [getIndexValue](1811176-getindexvalue.md)
- [getKeySubdirectories](1811186-getkeysubdirectories.md)
- [getKeyValue](1811212-getkeyvalue.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
