> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ositerator/1808048-getnextobject](https://developer.apple.com/documentation/kernel/ositerator/1808048-getnextobject)

# getNextObject

**Interface language:** Objective-C

**Framework:** Kernel

Advances to and returns the next object in the iteration.

## Declaration

```objectivec
virtual OSObject *getNextObject() = 0; 
```

<a id="return_value"></a>

## Return Value

The next object in the iteration context, `NULL` if there is no next object or if the iterator is no longer valid.

<a id="overview"></a>

## Overview

The returned object will be released if removed from the collection; if you plan to store the reference, you should call retain on that object.

Subclasses must implement this pure virtual function to check for validity with isValid, and then to advance the iteration context to the next object (if any) and return that next object, or `NULL` if there is none.

## See Also

### Miscellaneous

- [isValid](1808063-isvalid.md): Check that the collection hasn't been modified during iteration.
- [reset](1808074-reset.md): Resets the iterator to the beginning of the collection, as if it had just been created.
