> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollectioniterator/1808125-getnextobject](https://developer.apple.com/documentation/kernel/oscollectioniterator/1808125-getnextobject)

# getNextObject

**Interface language:** Objective-C

**Framework:** Kernel

Advances to and returns the next object in the iteration.

## Declaration

```objectivec
virtual OSObject * getNextObject(); 
```

<a id="return_value"></a>

## Return Value

The next object in the iteration context, `NULL` if there is no next object or if the iterator is no longer valid.

<a id="overview"></a>

## Overview

This function first calls isValid and returns `NULL` if that function returns `false`.

Subclasses must implement this pure virtual function to check for validity with isValid, and then to advance the iteration context to the next object (if any) and return that next object, or `NULL` if there is none.

## See Also

### Miscellaneous

- [free](1808113-free.md): Releases or deallocates any resources used by the OSCollectionIterator object.
- [initWithCollection](1808147-initwithcollection.md): Initializes an OSCollectionIterator for the provided collection object.
- [isValid](1808157-isvalid.md): Checks that the collection hasn't been modified during iteration.
- [reset](1808170-reset.md): Resets the iterator to the beginning of the collection, as if it had just been created.
- [withCollection](1808183-withcollection.md): Creates and initializes an OSCollectionIterator for the provided collection object.
