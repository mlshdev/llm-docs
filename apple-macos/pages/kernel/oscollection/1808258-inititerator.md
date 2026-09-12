> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/1808258-inititerator](https://developer.apple.com/documentation/kernel/oscollection/1808258-inititerator)

# initIterator

**Interface language:** Objective-C

**Framework:** Kernel

Initializes the iteration context for a collection subclass.

## Declaration

```objectivec
virtual bool initIterator(
 void *iterationContext) const = 0; 
```

## Parameters

- `iterationContext`: The iteration context to initialize.

<a id="return_value"></a>

## Return Value

`true` if initialization was successful, `false` otherwise.

<a id="overview"></a>

## Overview

This pure virtual member function, which subclasses must implement, is called by an OSCollectionIterator object to initialize an iteration context for a collection. The collection object should interpret `iterationContext` appropriately and initialize its contents to begin an iteration.

This function can be called repeatedly for a given context, whenever the iterator is reset via the OSCollectionIterator::reset function.

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
- [iteratorSize](1808262-iteratorsize.md): Returns the size in bytes of a subclass's iteration context.
- [setCapacityIncrement](1808267-setcapacityincrement.md): Sets the storage increment of the collection.
