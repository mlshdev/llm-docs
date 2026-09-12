> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmultisamplestencilresolvefilter/depthresolvedsample](https://developer.apple.com/documentation/metal/mtlmultisamplestencilresolvefilter/depthresolvedsample)

# MTLMultisampleStencilResolveFilter.depthResolvedSample (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

Chooses the stencil sample corresponding to the depth sample selected by the depth resolve filter.

## Declaration

```swift
case depthResolvedSample
```

<a id="discussion"></a>

## Discussion

The resolve filter selects the stencil sample corresponding to the sample that the depth resolve filter would have selected.

## See Also

### Stencil resolve filters

- [MTLMultisampleStencilResolveFilter.sample0](sample0.md): Chooses the first stencil sample in the pixel.

# MTLMultisampleStencilResolveFilterDepthResolvedSample (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

Chooses the stencil sample corresponding to the depth sample selected by the depth resolve filter.

## Declaration

```objectivec
MTLMultisampleStencilResolveFilterDepthResolvedSample
```

<a id="discussion"></a>

## Discussion

The resolve filter selects the stencil sample corresponding to the sample that the depth resolve filter would have selected.

## See Also

### Stencil resolve filters

- [MTLMultisampleStencilResolveFilterSample0](sample0.md): Chooses the first stencil sample in the pixel.
