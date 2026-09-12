> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceviewpool](https://developer.apple.com/documentation/metal/mtlresourceviewpool)

# MTLResourceViewPool (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Contains views over resources of a specific type, and allows you to manage those views.

## Declaration

```swift
protocol MTLResourceViewPool : NSObjectProtocol
```

## Topics

### Instance Properties

- [baseResourceID](mtlresourceviewpool/baseresourceid.md): Obtains the resource ID corresponding to the resource view at index 0 in this resource view pool.
- [device](mtlresourceviewpool/device.md): Obtains a reference to the GPU device this pool belongs to.
- [label](mtlresourceviewpool/label.md): Queries the optional debug label of this resource view pool.
- [resourceViewCount](mtlresourceviewpool/resourceviewcount.md): Queries the number of resource views that this pool contains.

### Instance Methods

- [copyResourceViews(sourcePool:sourceRange:destinationIndex:)](mtlresourceviewpool/copyresourceviews%28sourcepool_sourcerange_destinationindex_%29.md): Copies a range of resource views from a source view pool to a destination location in this view pool.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTLTextureViewPool](mtltextureviewpool.md)

## See Also

### View pools

- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)

# MTLResourceViewPool (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Contains views over resources of a specific type, and allows you to manage those views.

## Declaration

```objectivec
@protocol MTLResourceViewPool <NSObject>
```

## Topics

### Instance Properties

- [baseResourceID](mtlresourceviewpool/baseresourceid.md): Obtains the resource ID corresponding to the resource view at index 0 in this resource view pool.
- [device](mtlresourceviewpool/device.md): Obtains a reference to the GPU device this pool belongs to.
- [label](mtlresourceviewpool/label.md): Queries the optional debug label of this resource view pool.
- [resourceViewCount](mtlresourceviewpool/resourceviewcount.md): Queries the number of resource views that this pool contains.

### Instance Methods

- [copyResourceViewsFromPool:sourceRange:destinationIndex:](mtlresourceviewpool/copyresourceviewsfrompool_sourcerange_destinationindex_.md): Copies a range of resource views from a source view pool to a destination location in this view pool.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTLTextureViewPool](mtltextureviewpool.md)

## See Also

### View pools

- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)
