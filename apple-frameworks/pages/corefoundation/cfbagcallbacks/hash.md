> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfbagcallbacks/hash

# hash (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFBagHashCallBack](../cfbaghashcallback.md) for a description of this callback.

## Declaration

```swift
var hash: CFBagHashCallBack!
```

# hash (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFBagHashCallBack](../cfbaghashcallback.md) for a description of this callback.

## Declaration

```objectivec
CFBagHashCallBack hash;
```
