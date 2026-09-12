> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcallbacks/equal](https://developer.apple.com/documentation/corefoundation/cfbagcallbacks/equal)

# equal (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the collection for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFBagEqualCallBack](../cfbagequalcallback.md) for a description of this callback.

## Declaration

```swift
var equal: CFBagEqualCallBack!
```

# equal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the collection for equality for some operations. If `NULL`, the collection will use pointer equality to compare values in the collection. See [CFBagEqualCallBack](../cfbagequalcallback.md) for a description of this callback.

## Declaration

```objectivec
CFBagEqualCallBack equal;
```
