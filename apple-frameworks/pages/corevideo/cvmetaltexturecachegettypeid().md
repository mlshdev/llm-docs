> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturecachegettypeid()](https://developer.apple.com/documentation/corevideo/cvmetaltexturecachegettypeid())

# CVMetalTextureCacheGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Core Foundation type identifier for a Core Video Metal texture cache.

## Declaration

```swift
func CVMetalTextureCacheGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVMetalTextureCacheRef` type.

## See Also

### Functions

- [CVMetalTextureCacheCreate(\_:\_:\_:\_:\_:)](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush(\_:\_:)](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.

# CVMetalTextureCacheGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Core Foundation type identifier for a Core Video Metal texture cache.

## Declaration

```objectivec
extern CFTypeID CVMetalTextureCacheGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVMetalTextureCacheRef` type.

## See Also

### Functions

- [CVMetalTextureCacheCreate](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.
