> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandencoder/commandbuffer](https://developer.apple.com/documentation/metal/mtl4commandencoder/commandbuffer)

# commandBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the command buffer that is currently encoding commands.

## Declaration

```swift
var commandBuffer: (any MTL4CommandBuffer)? { get }
```

<a id="discussion"></a>

## Discussion

This property may return undefined results if you call it after calling [endEncoding()](endencoding%28%29.md).

# commandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the command buffer that is currently encoding commands.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTL4CommandBuffer> commandBuffer;
```

<a id="discussion"></a>

## Discussion

This property may return undefined results if you call it after calling [endEncoding](endencoding%28%29.md).
