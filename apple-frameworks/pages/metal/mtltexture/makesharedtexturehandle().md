> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/makesharedtexturehandle()](https://developer.apple.com/documentation/metal/mtltexture/makesharedtexturehandle())

# makeSharedTextureHandle() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a new texture handle from a shareable texture.

## Declaration

```swift
func makeSharedTextureHandle() -> MTLSharedTextureHandle?
```

<a id="discussion"></a>

## Discussion

If the texture is not shareable, this method returns `nil`.

# newSharedTextureHandle (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a new texture handle from a shareable texture.

## Declaration

```objectivec
- (MTLSharedTextureHandle *) newSharedTextureHandle;
```

<a id="discussion"></a>

## Discussion

If the texture is not shareable, this method returns `nil`.
