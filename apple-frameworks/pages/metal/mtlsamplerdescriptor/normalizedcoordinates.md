> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/normalizedcoordinates](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/normalizedcoordinates)

# normalizedCoordinates (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether texture coordinates are normalized to the range `[0.0, 1.0]`.

## Declaration

```swift
var normalizedCoordinates: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), texture coordinates are from `0.0` to `1.0`. If [false](https://developer.apple.com/documentation/swift/false), texture coordinates are from `0` to `width` for horizontal coordinates and `0` to `height` for vertical coordinates. The default value is [true](https://developer.apple.com/documentation/swift/true).

Non-normalized texture coordinates should only be used with 1D and 2D textures with the following conditions; otherwise, the results of sampling are undefined.

- The [MTLSamplerAddressMode.clampToEdge](../mtlsampleraddressmode/clamptoedge.md) or [MTLSamplerAddressMode.clampToZero](../mtlsampleraddressmode/clamptozero.md) address mode.
- The [MTLSamplerMipFilter.notMipmapped](../mtlsamplermipfilter/notmipmapped.md) mipmap filtering option.
- [minFilter](minfilter.md) and [magFilter](magfilter.md) need to be equal to each other.
- [maxAnisotropy](maxanisotropy.md) needs to be `1`.

# normalizedCoordinates (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether texture coordinates are normalized to the range `[0.0, 1.0]`.

## Declaration

```objectivec
@property (nonatomic) BOOL normalizedCoordinates;
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), texture coordinates are from `0.0` to `1.0`. If [false](https://developer.apple.com/documentation/swift/false), texture coordinates are from `0` to `width` for horizontal coordinates and `0` to `height` for vertical coordinates. The default value is [true](https://developer.apple.com/documentation/swift/true).

Non-normalized texture coordinates should only be used with 1D and 2D textures with the following conditions; otherwise, the results of sampling are undefined.

- The [MTLSamplerAddressModeClampToEdge](../mtlsampleraddressmode/clamptoedge.md) or [MTLSamplerAddressModeClampToZero](../mtlsampleraddressmode/clamptozero.md) address mode.
- The [MTLSamplerMipFilterNotMipmapped](../mtlsamplermipfilter/notmipmapped.md) mipmap filtering option.
- [minFilter](minfilter.md) and [magFilter](magfilter.md) need to be equal to each other.
- [maxAnisotropy](maxanisotropy.md) needs to be `1`.
