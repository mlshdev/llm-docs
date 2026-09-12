> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureviewdescriptor](https://developer.apple.com/documentation/metal/mtltextureviewdescriptor)

# MTLTextureViewDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
class MTLTextureViewDescriptor
```

## Topics

### Instance Properties

- [levelRange](mtltextureviewdescriptor/levelrange-55q8m.md): A desired range of mip levels of a texture view.
- [minLOD](mtltextureviewdescriptor/minlod.md): The minimum level of detail for texture views you create with the descriptor.
- [pixelFormat](mtltextureviewdescriptor/pixelformat.md)
- [sliceRange](mtltextureviewdescriptor/slicerange-6nq6v.md): A desired range of slices of a texture view.
- [swizzle](mtltextureviewdescriptor/swizzle.md)
- [textureType](mtltextureviewdescriptor/texturetype.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### View pools

- [MTLResourceViewPool](mtlresourceviewpool.md): Contains views over resources of a specific type, and allows you to manage those views.
- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.

# MTLTextureViewDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@interface MTLTextureViewDescriptor : NSObject
```

## Topics

### Instance Properties

- [levelRange](mtltextureviewdescriptor/levelrange-7e7f3.md)
- [minLOD](mtltextureviewdescriptor/minlod.md): The minimum level of detail for texture views you create with the descriptor.
- [pixelFormat](mtltextureviewdescriptor/pixelformat.md)
- [sliceRange](mtltextureviewdescriptor/slicerange-3cs9b.md)
- [swizzle](mtltextureviewdescriptor/swizzle.md)
- [textureType](mtltextureviewdescriptor/texturetype.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### View pools

- [MTLResourceViewPool](mtlresourceviewpool.md): Contains views over resources of a specific type, and allows you to manage those views.
- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.
