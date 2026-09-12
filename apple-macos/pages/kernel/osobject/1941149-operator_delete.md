> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osobject/1941149-operator_delete](https://developer.apple.com/documentation/kernel/osobject/1941149-operator_delete)

# operator delete

**Interface language:** Objective-C

**Framework:** Kernel

Frees the memory of the object itself.

## Declaration

```objectivec
static void operator delete(
 void *mem,
 size_tsize); 
```

## Parameters

- `mem`: A pointer to the object's memory.
- `size`: The size of the object's block of memory.

<a id="overview"></a>

## Overview

Never use `delete` on objects derived from OSObject; use release instead.

## See Also

### Miscellaneous

- [free](1941146-free.md): Deallocates/releases resources held by the object.
- [getRetainCount](1941147-getretaincount.md): Returns the reference count of the object.
- [init](1941148-init.md): Initializes a newly-allocated object.
- [operator new](1941150-operator_new.md): Allocates memory for an instance of the class.
- [release()](1941151-release.md): Releases a reference to the object, freeing it immediately if the reference count drops to zero.
- [release(int)](1941153-release.md): Releases a reference to an object, freeing it immediately if the reference count drops below the specified threshold.
- [retain](1941154-retain.md): Retains a reference to the object.
- [serialize](1941155-serialize.md): Overridden by subclasses to archive the receiver into the provided OSSerialize object.
- [taggedRelease(const void \*)](1941156-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops to zero.
- [taggedRelease(const void \*, const int)](1941157-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops below the specified threshold.
- [taggedRetain](1941158-taggedretain.md): Retains a reference to the object with an optional tag used for reference-tracking.
