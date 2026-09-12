> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptablevaluecallbacks](https://developer.apple.com/documentation/foundation/nsmaptablevaluecallbacks)

# NSMapTableValueCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.

## Declaration

```swift
struct NSMapTableValueCallBacks
```

<a id="overview"></a>

## Overview

All functions must know the types of things in the map table to be able to operate on them. Sets of predefined call backs are described in [NSMapTable](nsmaptable.md).

## Topics

### Initializers

- [init()](nsmaptablevaluecallbacks/init%28%29.md)
- [init(retain:release:describe:)](nsmaptablevaluecallbacks/init%28retain_release_describe_%29.md)

### Instance Properties

- [describe](nsmaptablevaluecallbacks/describe.md): Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the map table produces a generic string description.
- [release](nsmaptablevaluecallbacks/release.md): Points to the function that decrements a reference count for the given element, and if the reference count becomes zero, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.
- [retain](nsmaptablevaluecallbacks/retain.md): Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [NSMapEnumerator](nsmapenumerator.md): Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair(\_:\_:\_:)](nsnextmapenumeratorpair%28______%29.md).
- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

# NSMapTableValueCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.

## Declaration

```objectivec
typedef struct { ... } NSMapTableValueCallBacks;
```

<a id="overview"></a>

## Overview

All functions must know the types of things in the map table to be able to operate on them. Sets of predefined call backs are described in [NSMapTable](nsmaptable.md).

## Topics

### Instance Properties

- [describe](nsmaptablevaluecallbacks/describe.md): Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the map table produces a generic string description.
- [release](nsmaptablevaluecallbacks/release.md): Points to the function that decrements a reference count for the given element, and if the reference count becomes zero, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.
- [retain](nsmaptablevaluecallbacks/retain.md): Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## See Also

### Data Types

- [NSMapEnumerator](nsmapenumerator.md): Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair](nsnextmapenumeratorpair%28______%29.md).
- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
