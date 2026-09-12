> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycallbacks](https://developer.apple.com/documentation/corefoundation/cfarraycallbacks)

# CFArrayCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing the callbacks of a CFArray.

## Declaration

```swift
struct CFArrayCallBacks
```

## Topics

### Initializers

- [init()](cfarraycallbacks/init%28%29.md)
- [init(version:retain:release:copyDescription:equal:)](cfarraycallbacks/init%28version_retain_release_copydescription_equal_%29.md)

### Instance Properties

- [copyDescription](cfarraycallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md) for a description of this callback.
- [equal](cfarraycallbacks/equal.md): The callback used to compare values in the array for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFArrayEqualCallBack](cfarrayequalcallback.md) for a description of this callback.
- [release](cfarraycallbacks/release.md): The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFArrayReleaseCallBack](cfarrayreleasecallback.md) for a description of this callback.
- [retain](cfarraycallbacks/retain.md): The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFArrayRetainCallBack](cfarrayretaincallback.md) for a description of this callback.
- [version](cfarraycallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CFArrayCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing the callbacks of a CFArray.

## Declaration

```objectivec
typedef struct { ... } CFArrayCallBacks;
```

## Topics

### Instance Properties

- [copyDescription](cfarraycallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md) for a description of this callback.
- [equal](cfarraycallbacks/equal.md): The callback used to compare values in the array for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFArrayEqualCallBack](cfarrayequalcallback.md) for a description of this callback.
- [release](cfarraycallbacks/release.md): The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFArrayReleaseCallBack](cfarrayreleasecallback.md) for a description of this callback.
- [retain](cfarraycallbacks/retain.md): The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFArrayRetainCallBack](cfarrayretaincallback.md) for a description of this callback.
- [version](cfarraycallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.
