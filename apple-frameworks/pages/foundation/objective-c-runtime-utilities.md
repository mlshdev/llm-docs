> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/objective-c-runtime-utilities

# Objective-C Runtime Utilities (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Interact with the Objective-C runtime.

## Topics

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

### Serialization

- [NSGetSizeAndAlignment(\_:\_:\_:)](nsgetsizeandalignment%28______%29.md): Obtains the actual size and the aligned size of an encoded type.

# Objective-C Runtime Utilities (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Interact with the Objective-C runtime.

## Topics

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

### Serialization

- [NSGetSizeAndAlignment](nsgetsizeandalignment%28______%29.md): Obtains the actual size and the aligned size of an encoded type.

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSCopyObject](nscopyobject.md): Deprecated. Creates an exact copy of an object.
- [NSDeallocateObject](nsdeallocateobject.md): Destroys an existing object.
- [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md): Decrements the specified object’s reference count.
- [NSExtraRefCount](nsextrarefcount.md): Returns the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
- [NSShouldRetainWithZone](nsshouldretainwithzone.md): Indicates whether an object should be retained.
