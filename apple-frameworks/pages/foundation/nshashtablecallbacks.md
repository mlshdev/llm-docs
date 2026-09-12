> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablecallbacks](https://developer.apple.com/documentation/foundation/nshashtablecallbacks)

# NSHashTableCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.

## Declaration

```swift
struct NSHashTableCallBacks
```

<a id="overview"></a>

## Overview

All functions must know the types of things in the hash table to be able to operate on them. Sets of predefined call backs are described in [NSHashTable](nshashtable.md).

## Topics

### Initializers

- [init()](nshashtablecallbacks/init%28%29.md)
- [init(hash:isEqual:retain:release:describe:)](nshashtablecallbacks/init%28hash_isequal_retain_release_describe_%29.md)

### Instance Properties

- [describe](nshashtablecallbacks/describe.md): Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the hash table produces a generic string description.
- [hash](nshashtablecallbacks/hash.md): Points to the function that must produce hash code for elements of the hash table. If `NULL`, the pointer value is used as the hash code. Second parameter is the element for which hash code should be produced.
- [isEqual](nshashtablecallbacks/isequal.md): Points to the function that compares second and third parameters. If `NULL`, then == is used for comparison.
- [release](nshashtablecallbacks/release.md): Points to the function that decrements a reference count for the given element, and if the reference count becomes 0, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.
- [retain](nshashtablecallbacks/retain.md): Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [NSHashEnumerator](nshashenumerator.md): Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md).
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

# NSHashTableCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.

## Declaration

```objectivec
typedef struct { ... } NSHashTableCallBacks;
```

<a id="overview"></a>

## Overview

All functions must know the types of things in the hash table to be able to operate on them. Sets of predefined call backs are described in [NSHashTable](nshashtable.md).

## Topics

### Instance Properties

- [describe](nshashtablecallbacks/describe.md): Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the hash table produces a generic string description.
- [hash](nshashtablecallbacks/hash.md): Points to the function that must produce hash code for elements of the hash table. If `NULL`, the pointer value is used as the hash code. Second parameter is the element for which hash code should be produced.
- [isEqual](nshashtablecallbacks/isequal.md): Points to the function that compares second and third parameters. If `NULL`, then == is used for comparison.
- [release](nshashtablecallbacks/release.md): Points to the function that decrements a reference count for the given element, and if the reference count becomes 0, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.
- [retain](nshashtablecallbacks/retain.md): Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## See Also

### Data Types

- [NSHashEnumerator](nshashenumerator.md): Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md).
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.
