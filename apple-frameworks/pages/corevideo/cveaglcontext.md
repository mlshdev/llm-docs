> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cveaglcontext](https://developer.apple.com/documentation/corevideo/cveaglcontext)

# CVEAGLContext (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · tvOS 9.0+ · visionOS 1.0+

A type that resolves to an [EAGLContext](../opengles/eaglcontext.md) pointer when appropriate.

## Declaration

```swift
typealias CVEAGLContext = EAGLContext
```

```swift
typealias CVEAGLContext = UnsafeMutableRawPointer
```

<a id="Discussion"></a>

## Discussion

Core Video can be included in procedural C projects as well as Objective-C projects, so this type resolves to `void *` when using the former.

## See Also

### Data Types

- [CVOpenGLESTextureCache](cvopenglestexturecache.md)

# CVEAGLContext (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · tvOS 9.0+ · visionOS 1.0+

A type that resolves to an [EAGLContext](../opengles/eaglcontext.md) pointer when appropriate.

## Declaration

```objectivec
typedef EAGLContext * CVEAGLContext;
```

```objectivec
typedef void * CVEAGLContext;
```

<a id="Discussion"></a>

## Discussion

Core Video can be included in procedural C projects as well as Objective-C projects, so this type resolves to `void *` when using the former.

## See Also

### Data Types

- [CVOpenGLESTextureCacheRef](cvopenglestexturecache.md)
