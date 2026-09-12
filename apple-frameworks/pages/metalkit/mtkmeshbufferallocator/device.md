> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbufferallocator/device](https://developer.apple.com/documentation/metalkit/mtkmeshbufferallocator/device)

# device (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device used to create Metal objects.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="Discussion"></a>

## Discussion

A Metal device must be specialized at initialization.

# device (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device used to create Metal objects.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLDevice> device;
```

<a id="Discussion"></a>

## Discussion

A Metal device must be specialized at initialization.
