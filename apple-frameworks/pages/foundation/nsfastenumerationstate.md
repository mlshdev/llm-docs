> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfastenumerationstate](https://developer.apple.com/documentation/foundation/nsfastenumerationstate)

# NSFastEnumerationState (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This defines the structure used as contextual information in the [NSFastEnumeration](nsfastenumeration.md) protocol.

## Declaration

```swift
struct NSFastEnumerationState
```

<a id="overview"></a>

## Overview

For more information, see [countByEnumerating(with:objects:count:)](nsfastenumeration/countbyenumerating%28with_objects_count_%29.md).

## Topics

### Initializers

- [init()](nsfastenumerationstate/init%28%29.md)
- [init(state:itemsPtr:mutationsPtr:extra:)](nsfastenumerationstate/init%28state_itemsptr_mutationsptr_extra_%29.md)

### Instance Properties

- [extra](nsfastenumerationstate/extra.md): A C array that you can use to hold returned values.
- [itemsPtr](nsfastenumerationstate/itemsptr.md): A C array of objects.
- [mutationsPtr](nsfastenumerationstate/mutationsptr.md): Arbitrary state information used to detect whether the collection has been mutated.
- [state](nsfastenumerationstate/state.md): Arbitrary state information used by the iterator. Typically this is set to `0` at the beginning of the iteration.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# NSFastEnumerationState (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This defines the structure used as contextual information in the [NSFastEnumeration](nsfastenumeration.md) protocol.

## Declaration

```objectivec
typedef struct { ... } NSFastEnumerationState;
```

<a id="overview"></a>

## Overview

For more information, see [countByEnumeratingWithState:objects:count:](nsfastenumeration/countbyenumerating%28with_objects_count_%29.md).

## Topics

### Instance Properties

- [extra](nsfastenumerationstate/extra.md): A C array that you can use to hold returned values.
- [itemsPtr](nsfastenumerationstate/itemsptr.md): A C array of objects.
- [mutationsPtr](nsfastenumerationstate/mutationsptr.md): Arbitrary state information used to detect whether the collection has been mutated.
- [state](nsfastenumerationstate/state.md): Arbitrary state information used by the iterator. Typically this is set to `0` at the beginning of the iteration.
