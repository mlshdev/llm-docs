> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext](https://developer.apple.com/documentation/opengles/eaglcontext)

# EAGLContext (Swift)

**Framework:** OpenGL ES  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

An [EAGLContext](eaglcontext.md) object manages an OpenGL ES *rendering context*—the state information, commands, and resources needed to draw using OpenGL ES. To execute OpenGL ES commands, you need a current rendering context.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class EAGLContext
```

<a id="overview"></a>

## Overview

Drawing resources, such as textures and renderbuffers, are managed for the [EAGLContext](eaglcontext.md) object by an [EAGLSharegroup](eaglsharegroup.md) object associated with the context. When you initialize a new [EAGLContext](eaglcontext.md) object, you can choose to have it create a new sharegroup, or you can use one obtained from a previously created context.

Before drawing to a context, you must bind a complete framebuffer object to the context. For more information on configuring rendering contexts, see [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).

## Topics

### Creating Contexts

- [init(api:)](eaglcontext/init%28api_%29-q09o.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of the OpenGL ES rendering API.
- [init(api:sharegroup:)](eaglcontext/init%28api_sharegroup_%29-2rt8m.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.

### Setting the Current Context

- [setCurrent(\_:)](eaglcontext/setcurrent%28__%29.md): Deprecated. Makes the specified context the current rendering context for the calling thread.

### Attaching Storage to a Renderbuffer

- [renderbufferStorage(\_:from:)](eaglcontext/renderbufferstorage%28__from_%29.md): Deprecated. Binds a drawable object’s storage to an OpenGL ES renderbuffer object.

### Displaying a Renderbuffer

- [presentRenderbuffer(\_:)](eaglcontext/presentrenderbuffer%28__%29.md): Deprecated. Displays a renderbuffer’s contents on screen.

### Getting Context Information

- [api](eaglcontext/api.md): Deprecated. The OpenGL ES rendering API version supported by the context. (read-only)
- [sharegroup](eaglcontext/sharegroup.md): Deprecated. The context’s sharegroup object. (read-only)
- [debugLabel](eaglcontext/debuglabel.md): Deprecated. A label describing the context for use in debugging.
- [current()](eaglcontext/current%28%29.md): Deprecated. Returns the current rendering context for the calling thread.

### Enabling OpenGL ES Multithreading

- [isMultiThreaded](eaglcontext/ismultithreaded.md): Deprecated. A Boolean value that determines whether OpenGL ES defers work to another thread.

### Constants

- [EAGLRenderingAPI](eaglrenderingapi.md): Versions of OpenGL ES that a rendering context provides.

### Instance Methods

- [presentRenderbuffer(\_:afterMinimumDuration:)](eaglcontext/presentrenderbuffer%28__afterminimumduration_%29.md): Deprecated.
- [presentRenderbuffer(\_:atTime:)](eaglcontext/presentrenderbuffer%28__attime_%29.md): Deprecated.
- [texImageIOSurface(\_:target:internalFormat:width:height:format:type:plane:)](eaglcontext/teximageiosurface%28__target_internalformat_width_height_format_type_plane_%29.md): Deprecated.

### Initializers

- [init(API:)](eaglcontext/init%28api_%29-54mtn.md): Deprecated.
- [init(API:sharegroup:)](eaglcontext/init%28api_sharegroup_%29-3gr8h.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# EAGLContext (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

An [EAGLContext](eaglcontext.md) object manages an OpenGL ES *rendering context*—the state information, commands, and resources needed to draw using OpenGL ES. To execute OpenGL ES commands, you need a current rendering context.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface EAGLContext : NSObject
```

<a id="overview"></a>

## Overview

Drawing resources, such as textures and renderbuffers, are managed for the [EAGLContext](eaglcontext.md) object by an [EAGLSharegroup](eaglsharegroup.md) object associated with the context. When you initialize a new [EAGLContext](eaglcontext.md) object, you can choose to have it create a new sharegroup, or you can use one obtained from a previously created context.

Before drawing to a context, you must bind a complete framebuffer object to the context. For more information on configuring rendering contexts, see [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).

## Topics

### Creating Contexts

- [initWithAPI:](eaglcontext/init%28api_%29-q09o.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of the OpenGL ES rendering API.
- [initWithAPI:sharegroup:](eaglcontext/init%28api_sharegroup_%29-2rt8m.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.

### Setting the Current Context

- [setCurrentContext:](eaglcontext/setcurrent%28__%29.md): Deprecated. Makes the specified context the current rendering context for the calling thread.

### Attaching Storage to a Renderbuffer

- [renderbufferStorage:fromDrawable:](eaglcontext/renderbufferstorage%28__from_%29.md): Deprecated. Binds a drawable object’s storage to an OpenGL ES renderbuffer object.

### Displaying a Renderbuffer

- [presentRenderbuffer:](eaglcontext/presentrenderbuffer%28__%29.md): Deprecated. Displays a renderbuffer’s contents on screen.

### Getting Context Information

- [API](eaglcontext/api.md): Deprecated. The OpenGL ES rendering API version supported by the context. (read-only)
- [sharegroup](eaglcontext/sharegroup.md): Deprecated. The context’s sharegroup object. (read-only)
- [debugLabel](eaglcontext/debuglabel.md): Deprecated. A label describing the context for use in debugging.
- [currentContext](eaglcontext/current%28%29.md): Deprecated. Returns the current rendering context for the calling thread.

### Enabling OpenGL ES Multithreading

- [multiThreaded](eaglcontext/ismultithreaded.md): Deprecated. A Boolean value that determines whether OpenGL ES defers work to another thread.

### Constants

- [EAGLRenderingAPI](eaglrenderingapi.md): Versions of OpenGL ES that a rendering context provides.

### Instance Methods

- [presentRenderbuffer:afterMinimumDuration:](eaglcontext/presentrenderbuffer%28__afterminimumduration_%29.md): Deprecated.
- [presentRenderbuffer:atTime:](eaglcontext/presentrenderbuffer%28__attime_%29.md): Deprecated.
- [texImageIOSurface:target:internalFormat:width:height:format:type:plane:](eaglcontext/teximageiosurface%28__target_internalformat_width_height_format_type_plane_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
