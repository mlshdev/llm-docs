> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolgetpixelbufferattributes(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolgetpixelbufferattributes(_:))

# CVPixelBufferPoolGetPixelBufferAttributes(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes of pixel buffers which the system creates using the pool you specify.

## Declaration

```swift
func CVPixelBufferPoolGetPixelBufferAttributes(_ pool: CVPixelBufferPool) -> CFDictionary?
```

## Parameters

- `pool`: The pixel buffer pool that contains the attributes to retrieve.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pool attributes, or [nil](../objectivec/nil-227m0.md) if the function fails.

<a id="Discussion"></a>

## Discussion

Use this function to obtain information about the pixel buffers which the system creates using the pool you specify, before the system creates those pixel buffers.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetAttributes(\_:)](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetTypeID()](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.

# CVPixelBufferPoolGetPixelBufferAttributes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes of pixel buffers which the system creates using the pool you specify.

## Declaration

```objectivec
extern CFDictionaryRefCVPixelBufferPoolGetPixelBufferAttributes(CVPixelBufferPoolRef pool);
```

## Parameters

- `pool`: The pixel buffer pool that contains the attributes to retrieve.

<a id="return-value"></a>

## Return Value

A Core Foundation dictionary containing the pool attributes, or [nil](../objectivec/nil-227m0.md) if the function fails.

<a id="Discussion"></a>

## Discussion

Use this function to obtain information about the pixel buffers which the system creates using the pool you specify, before the system creates those pixel buffers.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetAttributes](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetTypeID](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.
