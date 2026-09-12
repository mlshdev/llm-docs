> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecommandqueue(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makecommandqueue(descriptor:))

# makeCommandQueue(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a command queue with the provided configuration.

## Declaration

```swift
func makeCommandQueue(descriptor: MTLCommandQueueDescriptor) -> (any MTLCommandQueue)?
```

## Parameters

- `descriptor`: The configuration for the new command queue.

# newCommandQueueWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a command queue with the provided configuration.

## Declaration

```objectivec
- (id<MTLCommandQueue>) newCommandQueueWithDescriptor:(MTLCommandQueueDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The configuration for the new command queue.
