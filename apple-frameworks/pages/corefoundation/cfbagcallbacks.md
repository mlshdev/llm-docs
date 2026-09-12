> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcallbacks](https://developer.apple.com/documentation/corefoundation/cfbagcallbacks)

# CFBagCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.

## Declaration

```swift
struct CFBagCallBacks
```

## Topics

### Initializers

- [init()](cfbagcallbacks/init%28%29.md)
- [init(version:retain:release:copyDescription:equal:hash:)](cfbagcallbacks/init%28version_retain_release_copydescription_equal_hash_%29.md)

### Instance Properties

- [copyDescription](cfbagcallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md) for a description of this callback.
- [equal](cfbagcallbacks/equal.md): The callback used to compare values in the collection for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFBagEqualCallBack](cfbagequalcallback.md) for a description of this callback.
- [hash](cfbagcallbacks/hash.md): The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFBagHashCallBack](cfbaghashcallback.md) for a description of this callback.
- [release](cfbagcallbacks/release.md): The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFBagReleaseCallBack](cfbagreleasecallback.md) for a description of this callback.
- [retain](cfbagcallbacks/retain.md): The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFBagRetainCallBack](cfbagretaincallback.md) for a descriptions of this function’s parameters.
- [version](cfbagcallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CFBagCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.

## Declaration

```objectivec
typedef struct { ... } CFBagCallBacks;
```

## Topics

### Instance Properties

- [copyDescription](cfbagcallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md) for a description of this callback.
- [equal](cfbagcallbacks/equal.md): The callback used to compare values in the collection for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFBagEqualCallBack](cfbagequalcallback.md) for a description of this callback.
- [hash](cfbagcallbacks/hash.md): The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFBagHashCallBack](cfbaghashcallback.md) for a description of this callback.
- [release](cfbagcallbacks/release.md): The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFBagReleaseCallBack](cfbagreleasecallback.md) for a description of this callback.
- [retain](cfbagcallbacks/retain.md): The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFBagRetainCallBack](cfbagretaincallback.md) for a descriptions of this function’s parameters.
- [version](cfbagcallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.
