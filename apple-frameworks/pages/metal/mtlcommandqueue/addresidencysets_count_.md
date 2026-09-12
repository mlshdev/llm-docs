> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/addresidencysets:count:](https://developer.apple.com/documentation/metal/mtlcommandqueue/addresidencysets:count:)

# addResidencySets:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.

## Declaration

```objectivec
- (void) addResidencySets:(id<MTLResidencySet> const[]) residencySets count:(NSUInteger) count;
```

## Parameters

- `residencySets`: A C array of residency sets, each of which contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.
- `count`: The number of elements in `residencySets`.

<a id="discussion"></a>

## Discussion

Each command queue can maintain a list of up to 32 different residency sets. See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.

## See Also

### Attaching residency sets

- [addResidencySet:](addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
