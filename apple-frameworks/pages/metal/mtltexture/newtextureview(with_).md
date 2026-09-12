> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/newtextureview(with:)](https://developer.apple.com/documentation/metal/mtltexture/newtextureview(with:))

# newTextureView(with:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func newTextureView(with descriptor: MTLTextureViewDescriptor) -> (any MTLTexture)?
```

<a id="discussion"></a>

## Discussion

Create a new texture which shares the same storage as the source texture, but with different (but compatible) properties specified by the descriptor

# newTextureViewWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (id<MTLTexture>) newTextureViewWithDescriptor:(MTLTextureViewDescriptor *) descriptor;
```

<a id="discussion"></a>

## Discussion

Create a new texture which shares the same storage as the source texture, but with different (but compatible) properties specified by the descriptor
