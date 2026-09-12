> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/1808225-getcapacity](https://developer.apple.com/documentation/kernel/oscollection/1808225-getcapacity)

# getCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Returns the number of objects the collection can store without reallocating.

## Declaration

```objectivec
virtual unsigned int getCapacity() const = 0; 
```

<a id="return_value"></a>

## Return Value

The number objects the collection can store without reallocating.

<a id="overview"></a>

## Overview

Subclasses must implement this pure virtual member function.

## See Also

### Miscellaneous

- [copyCollection](1808206-copycollection.md): Creates a deep copy of a collection.
- [ensureCapacity](1808212-ensurecapacity.md): Ensures the collection has enough space to store the requested number of objects.
- [flushCollection](1808219-flushcollection.md): Empties the collection, releasing any objects retained.
- [getCapacityIncrement](1808233-getcapacityincrement.md): Returns the storage increment of the collection.
- [getCount](1808238-getcount.md): Returns the number of objects in the collection.
- [getNextObjectForIterator](1808244-getnextobjectforiterator.md): Returns the next member of a collection.
- [haveUpdated](1808248-haveupdated.md): Tracks updates to the collection.
- [init](1808252-init.md): Initializes the OSCollection object.
- [initIterator](1808258-inititerator.md): Initializes the iteration context for a collection subclass.
- [iteratorSize](1808262-iteratorsize.md): Returns the size in bytes of a subclass's iteration context.
- [setCapacityIncrement](1808267-setcapacityincrement.md): Sets the storage increment of the collection.
