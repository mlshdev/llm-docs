> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/1812756-matchpropertytable](https://developer.apple.com/documentation/kernel/iohidinterface/1812756-matchpropertytable)

# matchPropertyTable

**Interface language:** Objective-C

**Framework:** Kernel

Called by the provider during a match

## Declaration

```objectivec
virtual bool matchPropertyTable( 
 OSDictionary *table, 
 SInt32 *score); 
```

## Parameters

- `table`: The property table that this device will match against

<a id="overview"></a>

## Overview

Compare the properties in the supplied table to this object's properties.

## See Also

### Miscellaneous

- [free](1812725-free.md): Free the IOHIDInterface object.
- [init](1812739-init.md): Initialize an IOHIDInterface object.
- [start](1812781-start.md): Start up the driver using the given provider.
