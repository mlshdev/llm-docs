> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osobject/1941155-serialize](https://developer.apple.com/documentation/kernel/osobject/1941155-serialize)

# serialize

**Interface language:** Objective-C

**Framework:** Kernel

Overridden by subclasses to archive the receiver into the provided OSSerialize object.

## Declaration

```objectivec
virtual bool serialize(
 OSSerialize *serializer) const; 
```

## Parameters

- `serializer`: The OSSerialize object.

<a id="return_value"></a>

## Return Value

`true` if serialization succeeds, `false` if not.

<a id="overview"></a>

## Overview

OSObject's implementation writes a string indicating that the class of the object receiving the function call is not serializable. Subclasses that can meaningfully encode themselves in I/O Kit-style property list XML can override this function to do so. See OSSerialize for more information.

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
- [taggedRelease(const void \*)](1941156-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops to zero.
- [taggedRelease(const void \*, const int)](1941157-taggedrelease.md): Releases a tagged reference to an object, freeing it immediately if the reference count drops below the specified threshold.
- [taggedRetain](1941158-taggedretain.md): Retains a reference to the object with an optional tag used for reference-tracking.
