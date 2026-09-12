> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/resolvelevel](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/resolvelevel)

# resolveLevel (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mipmap level of the texture used for the multisample resolve action.

## Declaration

```swift
var resolveLevel: Int { get set }
```

<a id="discussion"></a>

## Discussion

If the value of [storeAction](storeaction.md) is set to [MTLStoreAction.multisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreAction.storeAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), set this property to point to a mipmap in the resolve texture.

The default value is `0`.

## See Also

### Specifying the texture to resolve multisample data

- [resolveTexture](resolvetexture.md): The destination texture used when resolving multisampled texture data into single sample values.
- [resolveSlice](resolveslice.md): The slice of the texture used for the multisample resolve action.
- [resolveDepthPlane](resolvedepthplane.md): The depth plane of the texture used for the multisample resolve action.

# resolveLevel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mipmap level of the texture used for the multisample resolve action.

## Declaration

```objectivec
@property (nonatomic) NSUInteger resolveLevel;
```

<a id="discussion"></a>

## Discussion

If the value of [storeAction](storeaction.md) is set to [MTLStoreActionMultisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreActionStoreAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), set this property to point to a mipmap in the resolve texture.

The default value is `0`.

## See Also

### Specifying the texture to resolve multisample data

- [resolveTexture](resolvetexture.md): The destination texture used when resolving multisampled texture data into single sample values.
- [resolveSlice](resolveslice.md): The slice of the texture used for the multisample resolve action.
- [resolveDepthPlane](resolvedepthplane.md): The depth plane of the texture used for the multisample resolve action.
