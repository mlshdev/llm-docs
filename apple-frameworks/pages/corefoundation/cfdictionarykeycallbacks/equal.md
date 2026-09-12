> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarykeycallbacks/equal](https://developer.apple.com/documentation/corefoundation/cfdictionarykeycallbacks/equal)

# equal (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare keys in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare keys in the collection. See [CFDictionaryEqualCallBack](../cfdictionaryequalcallback.md) for a description of this callback.

## Declaration

```swift
var equal: CFDictionaryEqualCallBack!
```

# equal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare keys in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare keys in the collection. See [CFDictionaryEqualCallBack](../cfdictionaryequalcallback.md) for a description of this callback.

## Declaration

```objectivec
CFDictionaryEqualCallBack equal;
```
