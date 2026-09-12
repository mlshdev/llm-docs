> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryiterator/1810226-iterateover](https://developer.apple.com/documentation/kernel/ioregistryiterator/1810226-iterateover)

# iterateOver(const IORegistryPlane \*, IOOptionBits)

**Interface language:** Objective-C

**Framework:** Kernel

Create an iterator rooted at the registry root.

## Declaration

```objectivec
static IORegistryIterator * iterateOver(
 const IORegistryPlane *plane, 
 IOOptionBits options = 0 ); 
```

## Parameters

- `plane`: A plane object must be specified.
- `options`: kIORegistryIterateRecursively may be set to recurse automatically into each entry as it is returned. This option affects the behaviour of the getNextObject method, which is defined in the OSIterator superclass. Other methods will override this behaviour. kIORegistryIterateParents may be set to iterate the parents of each entry, by default the children are iterated.

<a id="return_value"></a>

## Return Value

A created IORegistryIterator instance, to be released by the caller when it has finished with it.

<a id="overview"></a>

## Overview

This method creates an IORegistryIterator that is set up with options to iterate children of the registry root entry, and to recurse automatically into entries as they are returned, or only when instructed. The iterator object keeps track of entries that have been recursed into previously to avoid loops.

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
- [iterateAll](1810202-iterateall.md): Iterates all entries (with getNextObject) and returns a set of all returned entries.
- [iterateOver(IORegistryEntry \*, const IORegistryPlane \*, IOOptionBits)](1810260-iterateover.md): Create an iterator rooted at a given registry entry.
- [reset](1810295-reset.md): Exits all levels of recursion, restoring the iterator to its state at creation.
