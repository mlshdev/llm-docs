> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osobject/1941158-taggedretain](https://developer.apple.com/documentation/kernel/osobject/1941158-taggedretain)

# taggedRetain

**Interface language:** Objective-C

**Framework:** Kernel

Retains a reference to the object with an optional tag used for reference-tracking.

## Declaration

```objectivec
virtual void taggedRetain(
 const void *tag = 0) const; 
```

## Parameters

- `tag`: Used for tracking collection references.

<a id="overview"></a>

## Overview

Kernel extensions should not use this function. It is for use by OSCollection and subclasses to track inclusion in collections.

If you need to maintain a reference to an object outside the context in which you received it, you should always retain it immediately.

## See Also

### Miscellaneous

- [free](1941146-free.md): Deallocates/releases resources held by the object.
- [getRetainCount](1941147-getretaincount.md): Returns the reference count of the object.
- [init](1941148-init.md): Initializes a newly-allocated object.
- [operator delete](1941149-operator_delete.md): Frees the memory of the object itself.
- [operator new](1941150-operator_new.md): Allocates memory for an instance of the class.
- [release()](1941151-release.md): Releases a reference to the object, freeing it immediately if the reference count drops to zero.
- [release(int)](1941153-release.md): Releases a reference to an object, freeing it immediately if the reference count drops below the specified threshold.
- [retain](1941154-retain.md): Retains a reference to the object.
- [serialize](1941155-serialize.md): Overridden by subclasses to archive the receiver into the provided OSSerialize object.
- [taggedRelease(const void \*)](1941156-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops to zero.
- [taggedRelease(const void \*, const int)](1941157-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops below the specified threshold.
