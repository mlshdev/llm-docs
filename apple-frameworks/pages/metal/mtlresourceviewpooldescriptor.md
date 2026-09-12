> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceviewpooldescriptor](https://developer.apple.com/documentation/metal/mtlresourceviewpooldescriptor)

# MTLResourceViewPoolDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides parameters for creating a resource view pool.

## Declaration

```swift
class MTLResourceViewPoolDescriptor
```

## Topics

### Instance Properties

- [label](mtlresourceviewpooldescriptor/label.md): Assigns an optional label you to the resource view pool for debugging purposes.
- [resourceViewCount](mtlresourceviewpooldescriptor/resourceviewcount.md): Configures the number of resource views with which Metal creates the resource view pool.

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
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)

# MTLResourceViewPoolDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides parameters for creating a resource view pool.

## Declaration

```objectivec
@interface MTLResourceViewPoolDescriptor : NSObject
```

## Topics

### Instance Properties

- [label](mtlresourceviewpooldescriptor/label.md): Assigns an optional label you to the resource view pool for debugging purposes.
- [resourceViewCount](mtlresourceviewpooldescriptor/resourceviewcount.md): Configures the number of resource views with which Metal creates the resource view pool.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### View pools

- [MTLResourceViewPool](mtlresourceviewpool.md): Contains views over resources of a specific type, and allows you to manage those views.
- [MTLTextureViewPool](mtltextureviewpool.md): A pool of lightweight texture views.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)
