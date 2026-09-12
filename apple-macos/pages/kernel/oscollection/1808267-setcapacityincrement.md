> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/1808267-setcapacityincrement](https://developer.apple.com/documentation/kernel/oscollection/1808267-setcapacityincrement)

# setCapacityIncrement

**Interface language:** Objective-C

**Framework:** Kernel

Sets the storage increment of the collection.

## Declaration

```objectivec
virtual unsigned int setCapacityIncrement(
 unsigned increment) = 0; 
```

<a id="return_value"></a>

## Return Value

The new storage increment of the collection, which may be different from the number requested.

<a id="overview"></a>

## Overview

Subclasses must implement this pure virtual member function. Most collection subclasses allocate their storage in multiples of the capacity increment.

Collection subclasses should gracefully handle an `increment` of zero by applying (and returning) a positive minimum capacity.

Setting the capacity increment does not trigger an immediate adjustment of a collection's storage.

See ensureCapacity for how the capacity increment is used.

## See Also

### Miscellaneous

- [copyCollection](1808206-copycollection.md): Creates a deep copy of a collection.
- [ensureCapacity](1808212-ensurecapacity.md): Ensures the collection has enough space to store the requested number of objects.
- [flushCollection](1808219-flushcollection.md): Empties the collection, releasing any objects retained.
- [getCapacity](1808225-getcapacity.md): Returns the number of objects the collection can store without reallocating.
- [getCapacityIncrement](1808233-getcapacityincrement.md): Returns the storage increment of the collection.
- [getCount](1808238-getcount.md): Returns the number of objects in the collection.
- [getNextObjectForIterator](1808244-getnextobjectforiterator.md): Returns the next member of a collection.
- [haveUpdated](1808248-haveupdated.md): Tracks updates to the collection.
- [init](1808252-init.md): Initializes the OSCollection object.
- [initIterator](1808258-inititerator.md): Initializes the iteration context for a collection subclass.
- [iteratorSize](1808262-iteratorsize.md): Returns the size in bytes of a subclass's iteration context.
