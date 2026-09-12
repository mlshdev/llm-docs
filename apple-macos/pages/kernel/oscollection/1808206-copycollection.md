> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/1808206-copycollection](https://developer.apple.com/documentation/kernel/oscollection/1808206-copycollection)

# copyCollection

**Interface language:** Objective-C

**Framework:** Kernel

Creates a deep copy of a collection.

## Declaration

```objectivec
virtual OSCollection *copyCollection(
 OSDictionary *cycleDict = 0); 
```

## Parameters

- `cycleDict`: A dictionary of all of the collections that have been copied so far, to start the copy at the top level pass `NULL` for `cycleDict`.

<a id="return_value"></a>

## Return Value

The newly copied collecton, `NULL` on failure.

<a id="overview"></a>

## Overview

This function copies the collection and all of the contained collections recursively. Objects that are not derived from OSCollection are retained rather than copied.

Subclasses of OSCollection must override this function to properly support deep copies.

## See Also

### Miscellaneous

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
- [setCapacityIncrement](1808267-setcapacityincrement.md): Sets the storage increment of the collection.
