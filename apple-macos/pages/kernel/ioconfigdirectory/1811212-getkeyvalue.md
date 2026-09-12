> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioconfigdirectory/1811212-getkeyvalue](https://developer.apple.com/documentation/kernel/ioconfigdirectory/1811212-getkeyvalue)

# getKeyValue

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getKeyValue(
 intvalue,
 UInt32 &text,
 OSString **text = NULL); 
```

## Parameters

- `value`: on return, set to the data type

  reference to variable to store the entry's value
- `text`: if non-zero, on return points to the string description of the field, or NULL if no text found.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if the key exists in the dictionary and is of a type appropriate for the value parameter

<a id="overview"></a>

## Overview

Gets the value for the specified key, in a variety of forms.

## See Also

### Miscellaneous

- [getIndexEntry](1811146-getindexentry.md)
- [getIndexKey](1811157-getindexkey.md)
- [getIndexType](1811166-getindextype.md)
- [getIndexValue](1811176-getindexvalue.md)
- [getKeySubdirectories](1811186-getkeysubdirectories.md)
- [getKeyType](1811199-getkeytype.md)
- [getSubdirectories](1811222-getsubdirectories.md)
- [update](1811231-update.md)
