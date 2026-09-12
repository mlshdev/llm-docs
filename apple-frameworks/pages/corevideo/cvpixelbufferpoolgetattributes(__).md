> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolgetattributes(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolgetattributes(_:))

# CVPixelBufferPoolGetAttributes(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The pool attributes dictionary for a pixel buffer pool.

## Declaration

```swift
func CVPixelBufferPoolGetAttributes(_ pool: CVPixelBufferPool) -> CFDictionary?
```

## Parameters

- `pool`: The pixel buffer pool that contains the attributes to retrieve.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pool attributes, or [nil](../objectivec/nil-227m0.md) if the function fails.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetPixelBufferAttributes(\_:)](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.
- [CVPixelBufferPoolGetTypeID()](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.

# CVPixelBufferPoolGetAttributes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The pool attributes dictionary for a pixel buffer pool.

## Declaration

```objectivec
extern CFDictionaryRefCVPixelBufferPoolGetAttributes(CVPixelBufferPoolRef pool);
```

## Parameters

- `pool`: The pixel buffer pool that contains the attributes to retrieve.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pool attributes, or [nil](../objectivec/nil-227m0.md) if the function fails.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetPixelBufferAttributes](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.
- [CVPixelBufferPoolGetTypeID](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.
