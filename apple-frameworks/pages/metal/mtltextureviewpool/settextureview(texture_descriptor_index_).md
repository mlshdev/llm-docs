> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureviewpool/settextureview(texture:descriptor:index:)](https://developer.apple.com/documentation/metal/mtltextureviewpool/settextureview(texture:descriptor:index:))

# setTextureView(texture:descriptor:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new lightweight texture view.

## Declaration

```swift
func setTextureView(texture: any MTLTexture, descriptor: MTLTextureViewDescriptor, index: Int) -> MTLResourceID
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance for which to create a new lightweight texture view.
- `descriptor`: A descriptor specifying properties of the texture view to create.
- `index`: An index of a slot in the texture pool into which this method writes the new texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a newly created texture view in this pool.

<a id="discussion"></a>

## Discussion

This method creates a lightweight texture view over a texture according to a descriptor you provide. It then associates the texture view with a slot in this texture view pool at the index you specify.

# setTextureView:descriptor:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new lightweight texture view.

## Declaration

```objectivec
- (MTLResourceID) setTextureView:(id<MTLTexture>) texture descriptor:(MTLTextureViewDescriptor *) descriptor atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance for which to create a new lightweight texture view.
- `descriptor`: A descriptor specifying properties of the texture view to create.
- `index`: An index of a slot in the texture pool into which this method writes the new texture view.

<a id="return-value"></a>

## Return Value

The [MTLResourceID](../mtlresourceid.md) of a newly created texture view in this pool.

<a id="discussion"></a>

## Discussion

This method creates a lightweight texture view over a texture according to a descriptor you provide. It then associates the texture view with a slot in this texture view pool at the index you specify.
