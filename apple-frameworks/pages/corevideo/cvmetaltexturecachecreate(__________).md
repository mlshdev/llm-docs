> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturecachecreate(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvmetaltexturecachecreate(_:_:_:_:_:))

# CVMetalTextureCacheCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new texture cache.

## Declaration

```swift
func CVMetalTextureCacheCreate(_ allocator: CFAllocator?, _ cacheAttributes: CFDictionary?, _ metalDevice: any MTLDevice, _ textureAttributes: CFDictionary?, _ cacheOut: UnsafeMutablePointer<CVMetalTextureCache?>) -> CVReturn
```

## Parameters

- `allocator`: The memory allocator for the texture.
- `cacheAttributes`: A dictionary specifying options for the cache’s behavior, or `NULL` to use default options. For applicable keys and values, see [Cache Attributes](cvmetaltexturecache-cache-attributes.md).
- `metalDevice`: The Metal device used to create texture objects.
- `textureAttributes`: A dictionary specifying options for creating textures from the cache, or `NULL` to use default options.
- `cacheOut`: Upon return, contains the newly created texture cache. When this value is `NULL`, an error occurred in texture creation.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture cache, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

## See Also

### Functions

- [CVMetalTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush(\_:\_:)](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.
- [CVMetalTextureCacheGetTypeID()](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.

# CVMetalTextureCacheCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new texture cache.

## Declaration

```objectivec
extern CVReturn CVMetalTextureCacheCreate(CFAllocatorRef allocator, CFDictionaryRef cacheAttributes, id<MTLDevice>metalDevice, CFDictionaryRef textureAttributes, CVMetalTextureCacheRef*cacheOut);
```

## Parameters

- `allocator`: The memory allocator for the texture.
- `cacheAttributes`: A dictionary specifying options for the cache’s behavior, or `NULL` to use default options. For applicable keys and values, see [Cache Attributes](cvmetaltexturecache-cache-attributes.md).
- `metalDevice`: The Metal device used to create texture objects.
- `textureAttributes`: A dictionary specifying options for creating textures from the cache, or `NULL` to use default options.
- `cacheOut`: Upon return, contains the newly created texture cache. When this value is `NULL`, an error occurred in texture creation.

<a id="return-value"></a>

## Return Value

Upon successful creation of the texture cache, this function returns [kCVReturnSuccess](kcvreturnsuccess.md).

## See Also

### Functions

- [CVMetalTextureCacheCreateTextureFromImage](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.
- [CVMetalTextureCacheGetTypeID](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.
