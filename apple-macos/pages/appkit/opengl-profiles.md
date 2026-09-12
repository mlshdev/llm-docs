> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/opengl-profiles](https://developer.apple.com/documentation/appkit/opengl-profiles)

# OpenGL Profiles

**Interface languages:** Swift, Objective-C

**Framework:** AppKit  
**Kind:** API Collection

Constants that specify the functionality provided by the renderer.

<a id="overview"></a>

## Overview

An OpenGL Profile is requested as part of the pixel format attributes string. When a context is created for a profile, the context must at least implement the requested version of the OpenGL specification. The context may implement a different version of the OpenGL specification as long as the version it implements is compatible with the requested version.

## Topics

### Constants

- [NSOpenGLProfileVersionLegacy](nsopenglprofileversionlegacy.md): Deprecated. The requested profile is a legacy (pre-OpenGL 3.0) profile.
- [NSOpenGLProfileVersion3_2Core](nsopenglprofileversion3_2core.md): Deprecated. The requested profile must implement the OpenGL 3.2 core functionality.
- [NSOpenGLProfileVersion4_1Core](nsopenglprofileversion4_1core.md): Deprecated.

## See Also

### Constants

- [NSOpenGLPixelFormatAttribute](nsopenglpixelformatattribute.md): Deprecated. Pixel format attributes for OpenGL.
- [OpenGL Pixel Format Attributes](opengl-pixel-format-attributes.md): Pixel format attributes for OpenGL.
