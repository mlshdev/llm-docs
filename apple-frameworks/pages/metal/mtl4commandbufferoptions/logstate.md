> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandbufferoptions/logstate](https://developer.apple.com/documentation/metal/mtl4commandbufferoptions/logstate)

# logState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Contains information related to shader logging.

## Declaration

```swift
var logState: (any MTLLogState)? { get set }
```

<a id="discussion"></a>

## Discussion

To enable shader logging, call [beginCommandBuffer(allocator:options:)](../mtl4commandbuffer/begincommandbuffer%28allocator_options_%29.md) with an instance of [MTL4CommandBufferOptions](../mtl4commandbufferoptions.md) that contains a non-`nil` [MTLLogState](../mtllogstate.md) instance in this property.

Shader functions log messages until the command buffer ends.

# logState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Contains information related to shader logging.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) id<MTLLogState> logState;
```

<a id="discussion"></a>

## Discussion

To enable shader logging, call [beginCommandBufferWithAllocator:options:](../mtl4commandbuffer/begincommandbuffer%28allocator_options_%29.md) with an instance of [MTL4CommandBufferOptions](../mtl4commandbufferoptions.md) that contains a non-`nil` [MTLLogState](../mtllogstate.md) instance in this property.

Shader functions log messages until the command buffer ends.
