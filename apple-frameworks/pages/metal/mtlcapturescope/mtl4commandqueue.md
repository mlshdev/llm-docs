> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturescope/mtl4commandqueue](https://developer.apple.com/documentation/metal/mtlcapturescope/mtl4commandqueue)

# mtl4CommandQueue (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

If set, this scope will only capture Metal commands from the associated Metal 4 command queue. Defaults to nil (all command queues from the associated device are captured).

## Declaration

```swift
var mtl4CommandQueue: (any MTL4CommandQueue)? { get }
```

# mtl4CommandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

If set, this scope will only capture Metal commands from the associated Metal 4 command queue. Defaults to nil (all command queues from the associated device are captured).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTL4CommandQueue> mtl4CommandQueue;
```
