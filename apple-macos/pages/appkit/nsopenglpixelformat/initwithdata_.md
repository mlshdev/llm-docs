> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat/initwithdata:](https://developer.apple.com/documentation/appkit/nsopenglpixelformat/initwithdata:)

# initWithData:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns an OpenGL pixel format object initialized with specified pixel format attribute data.

> Use [initWithAttributes:](init%28attributes_%29.md) instead.

## Declaration

```objectivec
- (id) initWithData:(NSData *) attribs;
```

## See Also

### Creating an OpenGL Pixel Format

- [initWithCGLPixelFormatObj:](init%28cglpixelformatobj_%29-2zqw4.md): Deprecated. Returns an OpenGL pixel format object initialized with using an existing CGL pixel format object.
- [initWithAttributes:](init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.
