> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ossymbol/1808036-initwithcstringnocopy](https://developer.apple.com/documentation/kernel/ossymbol/1808036-initwithcstringnocopy)

# initWithCStringNoCopy

**Interface language:** Objective-C

**Framework:** Kernel

Overridden to prevent creation of duplicate symbols.

## Declaration

```objectivec
virtual bool initWithCStringNoCopy(
 const char *cString); 
```

## Parameters

- `cString`: Unused.

<a id="return_value"></a>

## Return Value

`false`.

<a id="overview"></a>

## Overview

Overrides OSString's implementation to prevent creation of distinct OSSymbols with the same string value.

## See Also

### Miscellaneous

- [free](1808021-free.md): Overrides OSObject::free to synchronize with the symbol pool.
- [initWithCString](1808026-initwithcstring.md): Overridden to prevent creation of duplicate symbols.
- [initWithString](1808054-initwithstring.md): Overridden to prevent creation of duplicate symbols.
- [isEqualTo](1808078-isequalto.md): Tests the equality of an OSSymbol object to an arbitrary object.
- [isEqualTo(const char \*)](1808093-isequalto.md): Tests the equality of an OSSymbol object with a C string.
- [isEqualTo(const OSSymbol \*)](1808114-isequalto.md): Tests the equality of two OSSymbol objects.
- [taggedRelease(const void \*)](1808137-taggedrelease.md): Overrides OSObject::taggedRelease(const void \*) to synchronize with the symbol pool.
- [taggedRelease(const void \*, const int)](1808154-taggedrelease.md): Overrides OSObject::taggedRelease(const void \*, const int) to synchronize with the symbol pool.
- [withCString](1808171-withcstring.md): Returns an OSSymbol created from a C string, or the existing unique instance of the same value.
- [withCStringNoCopy](1808179-withcstringnocopy.md): Returns an OSSymbol created from a C string, without copying that string, or the existing unique instance of the same value.
- [withString](1808192-withstring.md): Returns an OSSymbol created from an OSString, or the existing unique instance of the same value.
