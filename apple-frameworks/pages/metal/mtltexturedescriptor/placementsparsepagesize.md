> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/placementsparsepagesize](https://developer.apple.com/documentation/metal/mtltexturedescriptor/placementsparsepagesize)

# placementSparsePageSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the page size for a placement sparse texture.

## Declaration

```swift
var placementSparsePageSize: MTLSparsePageSize { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a non-zero value to create a *placement sparse texture*.

Placement sparse textures are instances of [MTLTexture](../mtltexture.md) that you assign memory to using a [MTLHeap](../mtlheap.md) instance of type [MTLHeapType.placement](../mtlheaptype/placement.md) and a [maxCompatiblePlacementSparsePageSize](../mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md) at least as large as the [MTLSparsePageSize](../mtlsparsepagesize.md) value you assign to this property.

This value is 0 by default.

# placementSparsePageSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the page size for a placement sparse texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSparsePageSize placementSparsePageSize;
```

<a id="discussion"></a>

## Discussion

Set this property to a non-zero value to create a *placement sparse texture*.

Placement sparse textures are instances of [MTLTexture](../mtltexture.md) that you assign memory to using a [MTLHeap](../mtlheap.md) instance of type [MTLHeapTypePlacement](../mtlheaptype/placement.md) and a [maxCompatiblePlacementSparsePageSize](../mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md) at least as large as the [MTLSparsePageSize](../mtlsparsepagesize.md) value you assign to this property.

This value is 0 by default.
