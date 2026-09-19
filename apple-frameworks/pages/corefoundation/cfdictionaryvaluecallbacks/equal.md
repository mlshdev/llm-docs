> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfdictionaryvaluecallbacks/equal

# equal (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFDictionaryEqualCallBack](../cfdictionaryequalcallback.md) for a description of this callback.

## Declaration

```swift
var equal: CFDictionaryEqualCallBack!
```

# equal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the dictionary for equality. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFDictionaryEqualCallBack](../cfdictionaryequalcallback.md) for a description of this callback.

## Declaration

```objectivec
CFDictionaryEqualCallBack equal;
```
