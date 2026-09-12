> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdepthattachmentdescriptor/cleardepth](https://developer.apple.com/documentation/metal/mtlrenderpassdepthattachmentdescriptor/cleardepth)

# clearDepth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth to use when clearing the depth attachment.

## Declaration

```swift
var clearDepth: Double { get set }
```

<a id="discussion"></a>

## Discussion

If the [loadAction](../mtlrenderpassattachmentdescriptor/loadaction.md) property of the attachment is set to [MTLLoadAction.clear](../mtlloadaction/clear.md), then at the start of a render pass, the GPU fills the contents of the attachment with the value stored in the [clearDepth](cleardepth.md) property. Otherwise, the GPU ignores [clearDepth](cleardepth.md).

The default value is `1.0`.

# clearDepth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth to use when clearing the depth attachment.

## Declaration

```objectivec
@property (nonatomic) double clearDepth;
```

<a id="discussion"></a>

## Discussion

If the [loadAction](../mtlrenderpassattachmentdescriptor/loadaction.md) property of the attachment is set to [MTLLoadActionClear](../mtlloadaction/clear.md), then at the start of a render pass, the GPU fills the contents of the attachment with the value stored in the [clearDepth](cleardepth.md) property. Otherwise, the GPU ignores [clearDepth](cleardepth.md).

The default value is `1.0`.
