> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttable/settexture(_:index:)](https://developer.apple.com/documentation/metal/mtl4argumenttable/settexture(_:index:))

# setTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a texture to a texture binding slot.

## Declaration

```swift
func setTexture(_ resourceID: MTLResourceID, index bindingIndex: Int)
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the [MTLTexture](../mtltexture.md) instance to bind.
- `bindingIndex`: A valid binding index in the texture binding range. It is an error for this value to match or exceed the value of property [maxTextureBindCount](../mtl4argumenttabledescriptor/maxtexturebindcount.md) on the descriptor from which you created this argument table.

# setTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a texture to a texture binding slot.

## Declaration

```objectivec
- (void) setTexture:(MTLResourceID) resourceID atIndex:(NSUInteger) bindingIndex;
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the [MTLTexture](../mtltexture.md) instance to bind.
- `bindingIndex`: A valid binding index in the texture binding range. It is an error for this value to match or exceed the value of property [maxTextureBindCount](../mtl4argumenttabledescriptor/maxtexturebindcount.md) on the descriptor from which you created this argument table.
