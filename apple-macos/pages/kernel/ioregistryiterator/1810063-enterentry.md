> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryiterator/1810063-enterentry](https://developer.apple.com/documentation/kernel/ioregistryiterator/1810063-enterentry)

# enterEntry(const IORegistryPlane \*)

**Interface language:** Objective-C

**Framework:** Kernel

Recurse into the current entry in the registry iteration.

## Declaration

```objectivec
virtual void enterEntry(
 const IORegistryPlane *plane ); 
```

## Parameters

- `plane`: The new plane to switch into.

<a id="overview"></a>

## Overview

This method recurses into an entry as with enterEntry, but also switches from the current plane to a new one set by the caller.

## See Also

### Miscellaneous

- [enterEntry()](1810048-enterentry.md): Recurse into the current entry in the registry iteration.
- [exitEntry](1810081-exitentry.md): Exits a level of recursion, restoring the current entry.
- [getCurrentEntry](1810099-getcurrententry.md): Return the current entry in the registry iteration.
- [getNextObject](1810114-getnextobject.md): Return the next object in the registry iteration.
- [getNextObjectFlat](1810135-getnextobjectflat.md): Return the next object in the registry iteration, ignoring the kIORegistryIterateRecursively option.
- [getNextObjectRecursive](1810157-getnextobjectrecursive.md): Return the next object in the registry iteration, and enter it.
- [isValid](1810181-isvalid.md): Checks that no registry changes have invalidated the iteration.
- [iterateAll](1810202-iterateall.md): Iterates all entries (with getNextObject) and returns a set of all returned entries.
- [iterateOver(const IORegistryPlane \*, IOOptionBits)](1810226-iterateover.md): Create an iterator rooted at the registry root.
- [iterateOver(IORegistryEntry \*, const IORegistryPlane \*, IOOptionBits)](1810260-iterateover.md): Create an iterator rooted at a given registry entry.
- [reset](1810295-reset.md): Exits all levels of recursion, restoring the iterator to its state at creation.
