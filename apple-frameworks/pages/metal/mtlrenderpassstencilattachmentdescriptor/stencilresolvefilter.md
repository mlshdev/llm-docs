> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpassstencilattachmentdescriptor/stencilresolvefilter

# stencilResolveFilter (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

The filter used for stencil multisample resolve.

## Declaration

```swift
var stencilResolveFilter: MTLMultisampleStencilResolveFilter { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMultisampleStencilResolveFilter.sample0](../mtlmultisamplestencilresolvefilter/sample0.md).

# stencilResolveFilter (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 14.5+ · visionOS 1.0+

The filter used for stencil multisample resolve.

## Declaration

```objectivec
@property (nonatomic) MTLMultisampleStencilResolveFilter stencilResolveFilter;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMultisampleStencilResolveFilterSample0](../mtlmultisamplestencilresolvefilter/sample0.md).
