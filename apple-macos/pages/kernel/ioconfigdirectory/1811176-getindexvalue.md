> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811176-getindexvalue](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811176-getindexvalue)

# getIndexValue

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getIndexValue(
 inttype,
 UInt32 &value); 
```

## Parameters

- `type`: on return, set to the data type
- `value`: reference to variable to store the entry's value

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the index exists in the dictionary and is of a type appropriate for the value parameter

<a id="overview"></a>

## Overview

Gets the value at the specified index of the directory, in a variety of forms.

## See Also

### Miscellaneous

- [getIndexEntry](1811146-getindexentry.md)
- [getIndexKey](1811157-getindexkey.md)
- [getIndexType](1811166-getindextype.md)
- [getKeySubdirectories](1811186-getkeysubdirectories.md)
- [getKeyType](1811199-getkeytype.md)
- [getKeyValue](1811212-getkeyvalue.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
