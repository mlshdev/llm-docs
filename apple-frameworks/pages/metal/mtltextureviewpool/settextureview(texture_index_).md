> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureviewpool/settextureview(texture:index:)](https://developer.apple.com/documentation/metal/mtltextureviewpool/settextureview(texture:index:))

# setTextureView(texture:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Copies a default texture view to a slot in this texture view pool at an index provided.

## Declaration

```swift
func setTextureView(texture: any MTLTexture, index: Int) -> MTLResourceID
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance for which to copy its texture view.
- `index`: An index of a slot in this texture pool into which this method copies the texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a newly created texture view in this pool.

# setTextureView:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Copies a default texture view to a slot in this texture view pool at an index provided.

## Declaration

```objectivec
- (MTLResourceID) setTextureView:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance for which to copy its texture view.
- `index`: An index of a slot in this texture pool into which this method copies the texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a newly created texture view in this pool.
