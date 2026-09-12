> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/1808212-ensurecapacity](https://developer.apple.com/documentation/kernel/oscollection/1808212-ensurecapacity)

# ensureCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Ensures the collection has enough space to store the requested number of objects.

## Declaration

```objectivec
virtual unsigned int ensureCapacity(
 unsigned intnewCapacity) = 0; 
```

## Parameters

- `newCapacity`: The total number of objects the collection should be able to store.

<a id="return_value"></a>

## Return Value

The new capacity of the collection, which may be different from the number requested (if smaller, reallocation of storage failed).

<a id="overview"></a>

## Overview

Subclasses implement this pure virtual member function to adjust their storage so that they can hold at least `newCapacity` objects. Libkern collections generally allocate storage in multiples of their capacity increment.

Subclass methods that add objects to the collection should call this function before adding any object, and should check the return value for success.

Collection subclasses may reduce their storage when the number of contained objects falls below some threshold, but no Libkern collections currently do.

## See Also

### Miscellaneous

- [copyCollection](1808206-copycollection.md): Creates a deep copy of a collection.
- [flushCollection](1808219-flushcollection.md): Empties the collection, releasing any objects retained.
- [getCapacity](1808225-getcapacity.md): Returns the number of objects the collection can store without reallocating.
- [getCapacityIncrement](1808233-getcapacityincrement.md): Returns the storage increment of the collection.
- [getCount](1808238-getcount.md): Returns the number of objects in the collection.
- [getNextObjectForIterator](1808244-getnextobjectforiterator.md): Returns the next member of a collection.
- [haveUpdated](1808248-haveupdated.md): Tracks updates to the collection.
- [init](1808252-init.md): Initializes the OSCollection object.
- [initIterator](1808258-inititerator.md): Initializes the iteration context for a collection subclass.
- [iteratorSize](1808262-iteratorsize.md): Returns the size in bytes of a subclass's iteration context.
- [setCapacityIncrement](1808267-setcapacityincrement.md): Sets the storage increment of the collection.
