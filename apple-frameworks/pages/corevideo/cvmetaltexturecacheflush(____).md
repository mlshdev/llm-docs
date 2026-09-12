> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturecacheflush(_:_:)](https://developer.apple.com/documentation/corevideo/cvmetaltexturecacheflush(_:_:))

# CVMetalTextureCacheFlush(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Manually flushes the contents of the provided texture cache.

## Declaration

```swift
func CVMetalTextureCacheFlush(_ textureCache: CVMetalTextureCache, _ options: CVOptionFlags)
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Options for the flush operation. This parameter is currently unused and should be `0`.

<a id="Discussion"></a>

## Discussion

Texture caches automatically flush unused resources when you call the [CVMetalTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md) function and on the time interval specified by [kCVMetalTextureCacheMaximumTextureAgeKey](kcvmetaltexturecachemaximumtextureagekey.md). Use this method when you need fine-grained control over cache contents and memory.

## See Also

### Functions

- [CVMetalTextureCacheCreate(\_:\_:\_:\_:\_:)](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheGetTypeID()](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.

# CVMetalTextureCacheFlush (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Manually flushes the contents of the provided texture cache.

## Declaration

```objectivec
extern void CVMetalTextureCacheFlush(CVMetalTextureCacheRef textureCache, CVOptionFlags options);
```

## Parameters

- `textureCache`: The texture cache object to flush.
- `options`: Options for the flush operation. This parameter is currently unused and should be `0`.

<a id="Discussion"></a>

## Discussion

Texture caches automatically flush unused resources when you call the [CVMetalTextureCacheCreateTextureFromImage](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md) function and on the time interval specified by [kCVMetalTextureCacheMaximumTextureAgeKey](kcvmetaltexturecachemaximumtextureagekey.md). Use this method when you need fine-grained control over cache contents and memory.

## See Also

### Functions

- [CVMetalTextureCacheCreate](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheGetTypeID](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.
