> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolgettypeid()](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolgettypeid())

# CVPixelBufferPoolGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier of the pixel buffer pool type.

## Declaration

```swift
func CVPixelBufferPoolGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for this pixel buffer.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetAttributes(\_:)](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetPixelBufferAttributes(\_:)](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.

# CVPixelBufferPoolGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier of the pixel buffer pool type.

## Declaration

```objectivec
extern CFTypeID CVPixelBufferPoolGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for this pixel buffer.

## See Also

### Inspecting pools

- [CVPixelBufferPoolGetAttributes](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetPixelBufferAttributes](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.
