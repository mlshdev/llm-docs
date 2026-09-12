> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycallbacks/copydescription](https://developer.apple.com/documentation/corefoundation/cfarraycallbacks/copydescription)

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFArrayCopyDescriptionCallBack](../cfarraycopydescriptioncallback.md) for a description of this callback.

## Declaration

```swift
var copyDescription: CFArrayCopyDescriptionCallBack!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFArrayCopyDescriptionCallBack](../cfarraycopydescriptioncallback.md) for a description of this callback.

## Declaration

```objectivec
CFArrayCopyDescriptionCallBack copyDescription;
```
