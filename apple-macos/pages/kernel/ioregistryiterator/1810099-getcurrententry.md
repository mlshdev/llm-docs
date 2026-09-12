> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryiterator/1810099-getcurrententry](https://developer.apple.com/documentation/kernel/ioregistryiterator/1810099-getcurrententry)

# getCurrentEntry

**Interface language:** Objective-C

**Framework:** Kernel

Return the current entry in the registry iteration.

## Declaration

```objectivec
virtual IORegistryEntry * getCurrentEntry(
 void ); 
```

<a id="return_value"></a>

## Return Value

The current registry entry in the iteration, or zero if the last iteration returned zero, or the iteration is invalid (see isValid). The entry returned is retained while the iterator is pointing at it (its the current entry), or recursing into it. The caller should not release it.

<a id="overview"></a>

## Overview

This method returns the current entry, last returned by getNextObject et al. The object returned is retained while the iterator is pointing at it (its the current entry), or recursing into it. The caller should not release it. If the iteration is no longer valid (see isValid), the current entry is zero.

## See Also

### Miscellaneous

- [enterEntry()](1810048-enterentry.md): Recurse into the current entry in the registry iteration.
- [enterEntry(const IORegistryPlane \*)](1810063-enterentry.md): Recurse into the current entry in the registry iteration.
- [exitEntry](1810081-exitentry.md): Exits a level of recursion, restoring the current entry.
- [getNextObject](1810114-getnextobject.md): Return the next object in the registry iteration.
- [getNextObjectFlat](1810135-getnextobjectflat.md): Return the next object in the registry iteration, ignoring the kIORegistryIterateRecursively option.
- [getNextObjectRecursive](1810157-getnextobjectrecursive.md): Return the next object in the registry iteration, and enter it.
- [isValid](1810181-isvalid.md): Checks that no registry changes have invalidated the iteration.
- [iterateAll](1810202-iterateall.md): Iterates all entries (with getNextObject) and returns a set of all returned entries.
- [iterateOver(const IORegistryPlane \*, IOOptionBits)](1810226-iterateover.md): Create an iterator rooted at the registry root.
- [iterateOver(IORegistryEntry \*, const IORegistryPlane \*, IOOptionBits)](1810260-iterateover.md): Create an iterator rooted at a given registry entry.
- [reset](1810295-reset.md): Exits all levels of recursion, restoring the iterator to its state at creation.
