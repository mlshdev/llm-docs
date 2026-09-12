> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassstencilattachmentdescriptor/stencilresolvefilter](https://developer.apple.com/documentation/metal/mtlrenderpassstencilattachmentdescriptor/stencilresolvefilter)

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
