> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryiterator/1810202-iterateall](https://developer.apple.com/documentation/kernel/ioregistryiterator/1810202-iterateall)

# iterateAll

**Interface language:** Objective-C

**Framework:** Kernel

Iterates all entries (with getNextObject) and returns a set of all returned entries.

## Declaration

```objectivec
virtual OSOrderedSet * iterateAll(
 void ); 
```

<a id="return_value"></a>

## Return Value

A set of entries returned by the iteration. The caller should release the set when it has finished with it. Zero is returned on a resource failure.

<a id="overview"></a>

## Overview

This method will reset, then iterate all entries in the iteration (with getNextObject) until successful (ie. the iterator is valid at the end of the iteration).

## See Also

### Miscellaneous

- [enterEntry()](1810048-enterentry.md): Recurse into the current entry in the registry iteration.
- [enterEntry(const IORegistryPlane \*)](1810063-enterentry.md): Recurse into the current entry in the registry iteration.
- [exitEntry](1810081-exitentry.md): Exits a level of recursion, restoring the current entry.
- [getCurrentEntry](1810099-getcurrententry.md): Return the current entry in the registry iteration.
- [getNextObject](1810114-getnextobject.md): Return the next object in the registry iteration.
- [getNextObjectFlat](1810135-getnextobjectflat.md): Return the next object in the registry iteration, ignoring the kIORegistryIterateRecursively option.
- [getNextObjectRecursive](1810157-getnextobjectrecursive.md): Return the next object in the registry iteration, and enter it.
- [isValid](1810181-isvalid.md): Checks that no registry changes have invalidated the iteration.
- [iterateOver(const IORegistryPlane \*, IOOptionBits)](1810226-iterateover.md): Create an iterator rooted at the registry root.
- [iterateOver(IORegistryEntry \*, const IORegistryPlane \*, IOOptionBits)](1810260-iterateover.md): Create an iterator rooted at a given registry entry.
- [reset](1810295-reset.md): Exits all levels of recursion, restoring the iterator to its state at creation.
