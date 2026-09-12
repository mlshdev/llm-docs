> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811186-getkeysubdirectories](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811186-getkeysubdirectories)

# getKeySubdirectories

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getKeySubdirectories(
 intkey,
 OSIterator *&iterator); 
```

## Parameters

- `key`: type of subdirectory to iterate over
- `iterator`: on return, set to point to an OSIterator

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the iterator could be created

<a id="overview"></a>

## Overview

Creates an iterator over subdirectories of a given type of the directory.

## See Also

### Miscellaneous

- [getIndexEntry](1811146-getindexentry.md)
- [getIndexKey](1811157-getindexkey.md)
- [getIndexType](1811166-getindextype.md)
- [getIndexValue](1811176-getindexvalue.md)
- [getKeyType](1811199-getkeytype.md)
- [getKeyValue](1811212-getkeyvalue.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
