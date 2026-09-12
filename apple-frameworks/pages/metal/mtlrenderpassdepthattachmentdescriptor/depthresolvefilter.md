> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdepthattachmentdescriptor/depthresolvefilter](https://developer.apple.com/documentation/metal/mtlrenderpassdepthattachmentdescriptor/depthresolvefilter)

# depthResolveFilter (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+

The filter used for an MSAA depth resolve operation.

## Declaration

```swift
var depthResolveFilter: MTLMultisampleDepthResolveFilter { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMultisampleDepthResolveFilter.sample0](../mtlmultisampledepthresolvefilter/sample0.md).

# depthResolveFilter (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+

The filter used for an MSAA depth resolve operation.

## Declaration

```objectivec
@property (nonatomic) MTLMultisampleDepthResolveFilter depthResolveFilter;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMultisampleDepthResolveFilterSample0](../mtlmultisampledepthresolvefilter/sample0.md).
