> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscommandbuffer](https://developer.apple.com/documentation/metalperformanceshaders/mpscommandbuffer)

# MPSCommandBuffer (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSCommandBuffer
```

## Topics

### Initializers

- [init(commandBuffer:)](mpscommandbuffer/init%28commandbuffer_%29.md)
- [init(from:)](mpscommandbuffer/init%28from_%29.md)
- [init(fromCommandQueue:)](mpscommandbuffer/init%28fromcommandqueue_%29.md)

### Instance Properties

- [commandBuffer](mpscommandbuffer/commandbuffer.md)
- [heapProvider](mpscommandbuffer/heapprovider.md)
- [predicate](mpscommandbuffer/predicate.md)
- [rootCommandBuffer](mpscommandbuffer/rootcommandbuffer.md)

### Instance Methods

- [commitAndContinue()](mpscommandbuffer/commitandcontinue%28%29.md)
- [prefetchHeap(forWorkloadSize:)](mpscommandbuffer/prefetchheap%28forworkloadsize_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MTLCommandBuffer](../metal/mtlcommandbuffer.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSCommandBuffer (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSCommandBuffer : NSObject
```

## Topics

### Instance Properties

- [commandBuffer](mpscommandbuffer/commandbuffer.md)
- [heapProvider](mpscommandbuffer/heapprovider.md)
- [predicate](mpscommandbuffer/predicate.md)
- [rootCommandBuffer](mpscommandbuffer/rootcommandbuffer.md)

### Instance Methods

- [commitAndContinue](mpscommandbuffer/commitandcontinue%28%29.md)
- [initWithCommandBuffer:](mpscommandbuffer/init%28commandbuffer_%29.md)
- [prefetchHeapForWorkloadSize:](mpscommandbuffer/prefetchheap%28forworkloadsize_%29.md)

### Type Methods

- [commandBufferWithCommandBuffer:](mpscommandbuffer/commandbufferwithcommandbuffer_.md)
- [commandBufferFromCommandQueue:](mpscommandbuffer/init%28from_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MTLCommandBuffer](../metal/mtlcommandbuffer.md)
