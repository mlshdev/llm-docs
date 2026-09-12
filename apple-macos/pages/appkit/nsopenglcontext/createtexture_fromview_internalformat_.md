> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/createtexture:fromview:internalformat:](https://developer.apple.com/documentation/appkit/nsopenglcontext/createtexture:fromview:internalformat:)

# createTexture:fromView:internalFormat:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a new texture from the contents of the specified view.

## Declaration

```objectivec
- (void) createTexture:(GLenum) target fromView:(NSView *) view internalFormat:(GLenum) format;
```

## Parameters

- `target`: The identifier for the new texture.
- `view`: The view to use to generate the texture. This parameter must be either an `NSOpenGLView` object or some other kind of `NSView` object that’s associated with an `NSOpenGLContext` object.
- `format`: The format for the texture, interpreted as a `GLenum` data type.

<a id="Discussion"></a>

## Discussion

The new texture is assigned the identifier in the `target` parameter and is associated with the receiver’s context.
