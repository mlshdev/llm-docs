> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashenumerator](https://developer.apple.com/documentation/foundation/nshashenumerator)

# NSHashEnumerator (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem(\_:)](nsnexthashenumeratoritem%28__%29.md).

## Declaration

```swift
struct NSHashEnumerator
```

<a id="overview"></a>

## Overview

The fields of `NSHashEnumerator` are private.

## Topics

### Initializers

- [init()](nshashenumerator/init%28%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

# NSHashEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allows successive elements of a hash table to be returned each time this structure is passed to [NSNextHashEnumeratorItem](nsnexthashenumeratoritem%28__%29.md).

## Declaration

```objectivec
typedef struct { ... } NSHashEnumerator;
```

<a id="overview"></a>

## Overview

The fields of `NSHashEnumerator` are private.

## See Also

### Data Types

- [NSHashTableCallBacks](nshashtablecallbacks.md): Defines a structure that contains the function pointers used to configure behavior of `NSHashTable` with respect to elements within a hash table.
- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.
