> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/retainedreferences](https://developer.apple.com/documentation/metal/mtlcommandbuffer/retainedreferences)

# retainedReferences (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the command buffer maintains strong references to the resources it uses.

## Declaration

```swift
var retainedReferences: Bool { get }
```

<a id="discussion"></a>

## Discussion

You can configure this property when you create a command buffer by setting [retainedReferences](../mtlcommandbufferdescriptor/retainedreferences.md) of an [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance and calling the [makeCommandBuffer(descriptor:)](../mtlcommandqueue/makecommandbuffer%28descriptor_%29.md) method. The [makeCommandBuffer()](../mtlcommandqueue/makecommandbuffer%28%29.md) method sets this property to [true](https://developer.apple.com/documentation/swift/true), and [makeCommandBufferWithUnretainedReferences()](../mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md) sets it to [false](https://developer.apple.com/documentation/swift/false).

If [false](https://developer.apple.com/documentation/swift/false), your app is responsible for maintaining strong references to all the resources the command buffer relies on until it completes.

> **Important**

>  Releasing a resource before a command buffer’s commands complete may cause a runtime error or erratic behavior.

# retainedReferences (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the command buffer maintains strong references to the resources it uses.

## Declaration

```objectivec
@property (readonly) BOOL retainedReferences;
```

<a id="discussion"></a>

## Discussion

You can configure this property when you create a command buffer by setting [retainedReferences](../mtlcommandbufferdescriptor/retainedreferences.md) of an [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance and calling the [commandBufferWithDescriptor:](../mtlcommandqueue/makecommandbuffer%28descriptor_%29.md) method. The [commandBuffer](../mtlcommandqueue/makecommandbuffer%28%29.md) method sets this property to [true](https://developer.apple.com/documentation/swift/true), and [commandBufferWithUnretainedReferences](../mtlcommandqueue/makecommandbufferwithunretainedreferences%28%29.md) sets it to [false](https://developer.apple.com/documentation/swift/false).

If [false](https://developer.apple.com/documentation/swift/false), your app is responsible for maintaining strong references to all the resources the command buffer relies on until it completes.

> **Important**

>  Releasing a resource before a command buffer’s commands complete may cause a runtime error or erratic behavior.
