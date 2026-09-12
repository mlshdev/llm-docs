> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureviewpool/settextureview(buffer:descriptor:offset:bytesperrow:index:)](https://developer.apple.com/documentation/metal/mtltextureviewpool/settextureview(buffer:descriptor:offset:bytesperrow:index:))

# setTextureView(buffer:descriptor:offset:bytesPerRow:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new lightweight texture view of a buffer.

## Declaration

```swift
func setTextureView(buffer: any MTLBuffer, descriptor: MTLTextureDescriptor, offset: Int, bytesPerRow: Int, index: Int) -> MTLResourceID
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance for which to create a new texture view.
- `descriptor`: A descriptor specifying properties of the texture view to create.
- `offset`: A byte offset, within the `buffer` parameter, at which the data for the texture view starts.
- `bytesPerRow`: The number of bytes between adjacent rows of pixels in the source buffer’s memory.
- `index`: An index of a slot in the table into which this method writes the new texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a new buffer view in this pool.

<a id="discussion"></a>

## Discussion

This method creates a lightweight texture view over a buffer, according to a descriptor you provide. It then associates the texture view with a slot in this texture view pool at the index you specify.

# setTextureViewFromBuffer:descriptor:offset:bytesPerRow:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new lightweight texture view of a buffer.

## Declaration

```objectivec
- (MTLResourceID) setTextureViewFromBuffer:(id<MTLBuffer>) buffer descriptor:(MTLTextureDescriptor *) descriptor offset:(NSUInteger) offset bytesPerRow:(NSUInteger) bytesPerRow atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance for which to create a new texture view.
- `descriptor`: A descriptor specifying properties of the texture view to create.
- `offset`: A byte offset, within the `buffer` parameter, at which the data for the texture view starts.
- `bytesPerRow`: The number of bytes between adjacent rows of pixels in the source buffer’s memory.
- `index`: An index of a slot in the table into which this method writes the new texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a new buffer view in this pool.

<a id="discussion"></a>

## Discussion

This method creates a lightweight texture view over a buffer, according to a descriptor you provide. It then associates the texture view with a slot in this texture view pool at the index you specify.
