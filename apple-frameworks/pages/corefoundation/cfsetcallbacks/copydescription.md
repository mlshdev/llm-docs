> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcallbacks/copydescription](https://developer.apple.com/documentation/corefoundation/cfsetcallbacks/copydescription)

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFSetCopyDescriptionCallBack](../cfsetcopydescriptioncallback.md) for a description of this callback.

## Declaration

```swift
var copyDescription: CFSetCopyDescriptionCallBack!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of each value in the collection. If `NULL`, the collection will create a simple description of each value. See [CFSetCopyDescriptionCallBack](../cfsetcopydescriptioncallback.md) for a description of this callback.

## Declaration

```objectivec
CFSetCopyDescriptionCallBack copyDescription;
```
