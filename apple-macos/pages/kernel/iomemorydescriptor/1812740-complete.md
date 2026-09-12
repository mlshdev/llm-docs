> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812740-complete](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812740-complete)

# complete

**Interface language:** Objective-C

**Framework:** Kernel

Complete processing of the memory after an I/O transfer finishes.

## Declaration

```objectivec
virtual IOReturn complete(
 IODirection forDirection = forDirection) = 0; 
```

## Parameters

- `forDirection`: DEPRECATED The direction of the I/O just completed, or kIODirectionNone for the direction specified by the memory descriptor.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="overview"></a>

## Overview

This method should not be called unless a prepare was previously issued; the prepare() and complete() must occur in pairs, before and after an I/O transfer involving pageable memory. In 10.3 or greater systems the direction argument to complete is not longer respected. The direction is totally determined at prepare() time.

## See Also

### Preparing the Buffer

- [prepare](1812845-prepare.md): Prepare the memory for an I/O transfer.
- [prepare](1442024-prepare.md): Prepare the memory for an I/O transfer.
- [complete](1442043-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [getPreparationID](1441964-getpreparationid.md)
- [setPreparationID](1442011-setpreparationid.md)
