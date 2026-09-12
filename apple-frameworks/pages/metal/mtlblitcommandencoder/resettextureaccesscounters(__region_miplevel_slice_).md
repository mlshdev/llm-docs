> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/resettextureaccesscounters(_:region:miplevel:slice:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/resettextureaccesscounters(_:region:miplevel:slice:))

# resetTextureAccessCounters(\_:region:mipLevel:slice:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 26.4) · iPadOS 13.0+ (deprecated in 26.4) · Mac Catalyst 14.0+ (deprecated in 26.4) · macOS 11.0+ (deprecated in 26.4) · tvOS 16.0+ (deprecated in 26.4) · visionOS 1.0+ (deprecated in 26.4)

Encodes a command that resets a sparse texture’s access data for a specific region, mipmap level, and slice.

> Access counters are no longer supported in Metal

## Declaration

```swift
func resetTextureAccessCounters(_ texture: any MTLTexture, region: MTLRegion, mipLevel: Int, slice: Int)
```

```swift
optional func resetTextureAccessCounters(_ texture: any MTLTexture, region: MTLRegion, mipLevel: Int, slice: Int)
```

## Parameters

- `texture`: A sparse texture instance.
- `region`: A region within the sparse texture’s `mipLevel`, in sparse tile coordinates.
- `mipLevel`: A mipmap level within the sparse texture.
- `slice`: A slice within the sparse texture.

## See Also

### Managing sparse texture access counters

- [getTextureAccessCounters(\_:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:)](gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md): Deprecated. Encodes a command that retrieves a sparse texture’s access data for a specific region, mipmap level, and slice.

# resetTextureAccessCounters:region:mipLevel:slice: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 26.4) · iPadOS 13.0+ (deprecated in 26.4) · Mac Catalyst 14.0+ (deprecated in 26.4) · macOS 11.0+ (deprecated in 26.4) · tvOS 16.0+ (deprecated in 26.4) · visionOS 1.0+ (deprecated in 26.4)

Encodes a command that resets a sparse texture’s access data for a specific region, mipmap level, and slice.

> Access counters are no longer supported in Metal

## Declaration

```objectivec
- (void) resetTextureAccessCounters:(id<MTLTexture>) texture region:(MTLRegion) region mipLevel:(NSUInteger) mipLevel slice:(NSUInteger) slice;
```

## Parameters

- `texture`: A sparse texture instance.
- `region`: A region within the sparse texture’s `mipLevel`, in sparse tile coordinates.
- `mipLevel`: A mipmap level within the sparse texture.
- `slice`: A slice within the sparse texture.

## See Also

### Managing sparse texture access counters

- [getTextureAccessCounters:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:](gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md): Deprecated. Encodes a command that retrieves a sparse texture’s access data for a specific region, mipmap level, and slice.
