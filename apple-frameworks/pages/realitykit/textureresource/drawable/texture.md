> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawable/texture](https://developer.apple.com/documentation/realitykit/textureresource/drawable/texture)

# texture

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Metal texture object that contains the drawable’s contents.

## Declaration

```swift
var texture: any MTLTexture { get }
```

## See Also

### Working with a drawable

- [drawableQueue](drawablequeue.md): The DrawableQueue that this Drawable is owned by
- [present()](present%28%29.md): Presents the updated texture to the renderer as soon as possible.
