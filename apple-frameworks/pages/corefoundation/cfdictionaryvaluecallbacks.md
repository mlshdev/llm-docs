> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryvaluecallbacks](https://developer.apple.com/documentation/corefoundation/cfdictionaryvaluecallbacks)

# CFDictionaryValueCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.

## Declaration

```swift
struct CFDictionaryValueCallBacks
```

## Topics

### Initializers

- [init()](cfdictionaryvaluecallbacks/init%28%29.md)
- [init(version:retain:release:copyDescription:equal:)](cfdictionaryvaluecallbacks/init%28version_retain_release_copydescription_equal_%29.md)

### Instance Properties

- [copyDescription](cfdictionaryvaluecallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the dictionary. If `NULL`, the collection will create a simple description of each value. See [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md) for a description of this callback.
- [equal](cfdictionaryvaluecallbacks/equal.md): The callback used to compare values in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md) for a description of this callback.
- [release](cfdictionaryvaluecallbacks/release.md): The callback used to release values as they are removed from the dictionary. If `NULL`, values are not released. See [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md) for a description of this callback.
- [retain](cfdictionaryvaluecallbacks/retain.md): The callback used to retain each value as they are added to the collection. This callback returns the value to use as the value in the dictionary, which is usually the value parameter passed to this callback, but may be a different value if a different value should be used as the value. If `NULL`, values are not retained. See [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md) for a descriptions of this function’s parameters.
- [version](cfdictionaryvaluecallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.

# CFDictionaryValueCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.

## Declaration

```objectivec
typedef struct { ... } CFDictionaryValueCallBacks;
```

## Topics

### Instance Properties

- [copyDescription](cfdictionaryvaluecallbacks/copydescription.md): The callback used to create a descriptive string representation of each value in the dictionary. If `NULL`, the collection will create a simple description of each value. See [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md) for a description of this callback.
- [equal](cfdictionaryvaluecallbacks/equal.md): The callback used to compare values in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md) for a description of this callback.
- [release](cfdictionaryvaluecallbacks/release.md): The callback used to release values as they are removed from the dictionary. If `NULL`, values are not released. See [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md) for a description of this callback.
- [retain](cfdictionaryvaluecallbacks/retain.md): The callback used to retain each value as they are added to the collection. This callback returns the value to use as the value in the dictionary, which is usually the value parameter passed to this callback, but may be a different value if a different value should be used as the value. If `NULL`, values are not retained. See [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md) for a descriptions of this function’s parameters.
- [version](cfdictionaryvaluecallbacks/version.md): The version number of this structure. If not one of the defined version numbers for this opaque type, the behavior is undefined. The current version of this structure is 0.

## See Also

### Data Types

- [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.
