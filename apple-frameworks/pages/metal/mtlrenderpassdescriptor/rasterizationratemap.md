> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/rasterizationratemap](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/rasterizationratemap)

# rasterizationRateMap (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The rasterization rate map to use when executing the render pass.

## Declaration

```swift
var rasterizationRateMap: (any MTLRasterizationRateMap)? { get set }
```

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

The default value is `nil`, which means that viewport coordinates are in the same coordinate system as the physical coordinates in the render target. Otherwise, Metal uses the rate map to convert between viewport coordinates and physical coordinates in the render target.

# rasterizationRateMap (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The rasterization rate map to use when executing the render pass.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MTLRasterizationRateMap> rasterizationRateMap;
```

## Mentioned In

- [Rendering with a rasterization rate map](../rendering-with-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

The default value is `nil`, which means that viewport coordinates are in the same coordinate system as the physical coordinates in the render target. Otherwise, Metal uses the rate map to convert between viewport coordinates and physical coordinates in the render target.
