> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settessellationfactorbuffer(_:offset:instancestride:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settessellationfactorbuffer(_:offset:instancestride:))

# setTessellationFactorBuffer(\_:offset:instanceStride:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the per-patch tessellation factors for any subsequent patch-drawing commands.

## Declaration

```swift
func setTessellationFactorBuffer(_ buffer: (any MTLBuffer)?, offset: Int, instanceStride: Int)
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance that stores the per-patch tessellation factors, which can’t be empty or `nil`.
- `offset`: The distance, in bytes, between the start of the data and the start of the buffer, which needs to be a multiple of `4`.
- `instanceStride`: The number of bytes between two instances of data in `buffer`, which needs to be a multiple of `4`.

<a id="discussion"></a>

## Discussion

Call this method before encoding patch-drawing commands.

## See Also

### Configuring tessellation factors

- [setTessellationFactorScale(\_:)](settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.

# setTessellationFactorBuffer:offset:instanceStride: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the per-patch tessellation factors for any subsequent patch-drawing commands.

## Declaration

```objectivec
- (void) setTessellationFactorBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset instanceStride:(NSUInteger) instanceStride;
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance that stores the per-patch tessellation factors, which can’t be empty or `nil`.
- `offset`: The distance, in bytes, between the start of the data and the start of the buffer, which needs to be a multiple of `4`.
- `instanceStride`: The number of bytes between two instances of data in `buffer`, which needs to be a multiple of `4`.

<a id="discussion"></a>

## Discussion

Call this method before encoding patch-drawing commands.

## See Also

### Configuring tessellation factors

- [setTessellationFactorScale:](settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.
