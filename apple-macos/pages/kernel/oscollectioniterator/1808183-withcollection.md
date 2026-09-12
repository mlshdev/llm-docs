> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollectioniterator/1808183-withcollection](https://developer.apple.com/documentation/kernel/oscollectioniterator/1808183-withcollection)

# withCollection

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an OSCollectionIterator for the provided collection object.

## Declaration

```objectivec
static OSCollectionIterator * withCollection(
 const OSCollection *inColl); 
```

## Parameters

- `inColl`: The OSCollection-derived collection object to be iteratated.

<a id="return_value"></a>

## Return Value

A new instance of OSCollectionIterator, or `NULL` on failure.

## See Also

### Miscellaneous

- [free](1808113-free.md): Releases or deallocates any resources used by the OSCollectionIterator object.
- [getNextObject](1808125-getnextobject.md): Advances to and returns the next object in the iteration.
- [initWithCollection](1808147-initwithcollection.md): Initializes an OSCollectionIterator for the provided collection object.
- [isValid](1808157-isvalid.md): Checks that the collection hasn't been modified during iteration.
- [reset](1808170-reset.md): Resets the iterator to the beginning of the collection, as if it had just been created.
