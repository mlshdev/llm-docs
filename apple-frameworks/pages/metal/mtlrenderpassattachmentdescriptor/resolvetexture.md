> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/resolvetexture](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/resolvetexture)

# resolveTexture (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The destination texture used when resolving multisampled texture data into single sample values.

## Declaration

```swift
var resolveTexture: (any MTLTexture)? { get set }
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

If the [storeAction](storeaction.md) value is set to [MTLStoreAction.multisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreAction.storeAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), then the [resolveTexture](resolvetexture.md) value needs to point to a valid texture. Otherwise, Metal ignores this property.

## See Also

### Specifying the texture to resolve multisample data

- [resolveLevel](resolvelevel.md): The mipmap level of the texture used for the multisample resolve action.
- [resolveSlice](resolveslice.md): The slice of the texture used for the multisample resolve action.
- [resolveDepthPlane](resolvedepthplane.md): The depth plane of the texture used for the multisample resolve action.

# resolveTexture (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The destination texture used when resolving multisampled texture data into single sample values.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MTLTexture> resolveTexture;
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

If the [storeAction](storeaction.md) value is set to [MTLStoreActionMultisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreActionStoreAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), then the [resolveTexture](resolvetexture.md) value needs to point to a valid texture. Otherwise, Metal ignores this property.

## See Also

### Specifying the texture to resolve multisample data

- [resolveLevel](resolvelevel.md): The mipmap level of the texture used for the multisample resolve action.
- [resolveSlice](resolveslice.md): The slice of the texture used for the multisample resolve action.
- [resolveDepthPlane](resolvedepthplane.md): The depth plane of the texture used for the multisample resolve action.
