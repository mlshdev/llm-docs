> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmapenumerator](https://developer.apple.com/documentation/foundation/nsmapenumerator)

# NSMapEnumerator (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair(\_:\_:\_:)](nsnextmapenumeratorpair%28______%29.md).

## Declaration

```swift
struct NSMapEnumerator
```

<a id="overview"></a>

## Overview

The fields of `NSMapEnumerator` are private.

## Topics

### Initializers

- [init()](nsmapenumerator/init%28%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.

# NSMapEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allows successive elements of a map table to be returned each time this structure is passed to [NSNextMapEnumeratorPair](nsnextmapenumeratorpair%28______%29.md).

## Declaration

```objectivec
typedef struct { ... } NSMapEnumerator;
```

<a id="overview"></a>

## Overview

The fields of `NSMapEnumerator` are private.

## See Also

### Data Types

- [NSMapTable](legacy-nsmaptable.md): The opaque data type used by the functions described in Managing Map Tables.
- [NSMapTableKeyCallBacks](nsmaptablekeycallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to key elements within a map table.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
- [NSMapTableValueCallBacks](nsmaptablevaluecallbacks.md): The function pointers used to configure behavior of `NSMapTable` with respect to value elements within a map table.
