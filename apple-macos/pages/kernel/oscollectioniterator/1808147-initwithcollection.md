> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollectioniterator/1808147-initwithcollection](https://developer.apple.com/documentation/kernel/oscollectioniterator/1808147-initwithcollection)

# initWithCollection

**Interface language:** Objective-C

**Framework:** Kernel

Initializes an OSCollectionIterator for the provided collection object.

## Declaration

```objectivec
virtual bool initWithCollection(
 const OSCollection *inColl); 
```

## Parameters

- `inColl`: The OSCollection-derived collection object to be iteratated.

<a id="return_value"></a>

## Return Value

`true` if the initialization was successful, or `false` on failure.

<a id="overview"></a>

## Overview

Not for general use. Use the static instance creation method withCollection instead.

## See Also

### Miscellaneous

- [free](1808113-free.md): Releases or deallocates any resources used by the OSCollectionIterator object.
- [getNextObject](1808125-getnextobject.md): Advances to and returns the next object in the iteration.
- [isValid](1808157-isvalid.md): Checks that the collection hasn't been modified during iteration.
- [reset](1808170-reset.md): Resets the iterator to the beginning of the collection, as if it had just been created.
- [withCollection](1808183-withcollection.md): Creates and initializes an OSCollectionIterator for the provided collection object.
