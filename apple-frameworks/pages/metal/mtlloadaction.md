> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlloadaction](https://developer.apple.com/documentation/metal/mtlloadaction)

# MTLLoadAction (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Types of actions performed for an attachment at the start of a rendering pass.

## Declaration

```swift
enum MTLLoadAction
```

## Mentioned In

- [Setting load and store actions](setting-load-and-store-actions.md)

## Topics

### Load actions

- [MTLLoadAction.dontCare](mtlloadaction/dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadAction.load](mtlloadaction/load.md): The GPU preserves the existing contents of the attachment at the start of the render pass.
- [MTLLoadAction.clear](mtlloadaction/clear.md): The GPU writes a value to every pixel in the attachment at the start of the render pass.

### Initializers

- [init(rawValue:)](mtlloadaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.

# MTLLoadAction (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Types of actions performed for an attachment at the start of a rendering pass.

## Declaration

```objectivec
enum MTLLoadAction : NSUInteger;
```

## Mentioned In

- [Setting load and store actions](setting-load-and-store-actions.md)

## Topics

### Load actions

- [MTLLoadActionDontCare](mtlloadaction/dontcare.md): The GPU has permission to discard the existing contents of the attachment at the start of the render pass, replacing them with arbitrary data.
- [MTLLoadActionLoad](mtlloadaction/load.md): The GPU preserves the existing contents of the attachment at the start of the render pass.
- [MTLLoadActionClear](mtlloadaction/clear.md): The GPU writes a value to every pixel in the attachment at the start of the render pass.

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.
