> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/rasterizationratemap](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/rasterizationratemap)

# rasterizationRateMap (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional variable rasterization rate map that Metal uses in the render pass.

## Declaration

```swift
var rasterizationRateMap: (any MTLRasterizationRateMap)? { get set }
```

<a id="discussion"></a>

## Discussion

Enabling variable rasterization rate allows Metal to decrease the rasterization rate, typically in unimportant regions of color attachments, to accelerate processing.

When set to `nil`, the default, Metal doesn’t use variable rasterization rate.

# rasterizationRateMap (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional variable rasterization rate map that Metal uses in the render pass.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MTLRasterizationRateMap> rasterizationRateMap;
```

<a id="discussion"></a>

## Discussion

Enabling variable rasterization rate allows Metal to decrease the rasterization rate, typically in unimportant regions of color attachments, to accelerate processing.

When set to `nil`, the default, Metal doesn’t use variable rasterization rate.
