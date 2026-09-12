> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcallbacks/hash](https://developer.apple.com/documentation/corefoundation/cfsetcallbacks/hash)

# hash (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFSetHashCallBack](../cfsethashcallback.md) for a description of this callback.

## Declaration

```swift
var hash: CFSetHashCallBack!
```

# hash (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for values in a collection. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFSetHashCallBack](../cfsethashcallback.md) for a description of this callback.

## Declaration

```objectivec
CFSetHashCallBack hash;
```
