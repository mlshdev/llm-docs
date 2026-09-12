> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/drawable-property-keys](https://developer.apple.com/documentation/opengles/drawable-property-keys)

# Drawable Property Keys

**Interface languages:** Swift, Objective-C

**Framework:** OpenGL ES  
**Kind:** API Collection

Keys to specify in the `drawableProperties` dictionary.

## Topics

### Constants

- [kEAGLDrawablePropertyColorFormat](keagldrawablepropertycolorformat.md): Deprecated. The key specifying the internal color buffer format for the drawable surface. The value for this key is an `NSString` object that specifies a specific color buffer format. This color buffer format is used by the `EAGLContext` object to create the storage for a renderbuffer. The default value is `kEAGLColorFormatRGBA8`.
- [kEAGLDrawablePropertyRetainedBacking](keagldrawablepropertyretainedbacking.md): Deprecated. The key specifying whether the drawable surface retains its contents after displaying them. The value for this key is an `NSNumber` object containing a `BOOL` data type. If `false`, you may not rely on the contents being the same after the contents are displayed. If `true`, then the contents will not change after being displayed. Setting the value to `true` is recommended only when you need the content to remain unchanged, as using it can result in both reduced performance and additional memory usage. The default value is `false`.
