> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferlockbaseaddress(_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferlockbaseaddress(_:_:))

# CVPixelBufferLockBaseAddress(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Locks the base address of the pixel buffer.

## Declaration

```swift
func CVPixelBufferLockBaseAddress(_ pixelBuffer: CVPixelBuffer, _ lockFlags: CVPixelBufferLockFlags) -> CVReturn
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to lock.
- `lockFlags`: An option that indicates whether you modify the buffer’s data while you hold the lock. Pass [readOnly](cvpixelbufferlockflags/readonly.md) to lock the buffer for reading only, or pass no flags to lock it for both reading and writing.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

You must call the [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) function before accessing pixel data with the CPU, and call the [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md) function afterward. If you include the [readOnly](cvpixelbufferlockflags/readonly.md) value in the `lockFlags` parameter when locking the buffer, you must also include it when unlocking the buffer. Using the flag asymmetrically results in undefined behavior.

> **Important**

>  When accessing pixel data with the GPU, locking is not necessary and can impair performance.

## See Also

### Modifying Pixel Buffers

- [CVPixelBufferFillExtendedPixels(\_:)](cvpixelbufferfillextendedpixels%28__%29.md): Fills the extended pixels of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.

# CVPixelBufferLockBaseAddress (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Locks the base address of the pixel buffer.

## Declaration

```objectivec
extern CVReturn CVPixelBufferLockBaseAddress(CVPixelBufferRef pixelBuffer, CVPixelBufferLockFlags lockFlags);
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to lock.
- `lockFlags`: An option that indicates whether you modify the buffer’s data while you hold the lock. Pass [kCVPixelBufferLock_ReadOnly](cvpixelbufferlockflags/readonly.md) to lock the buffer for reading only, or pass no flags to lock it for both reading and writing.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

You must call the [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) function before accessing pixel data with the CPU, and call the [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md) function afterward. If you include the [kCVPixelBufferLock_ReadOnly](cvpixelbufferlockflags/readonly.md) value in the `lockFlags` parameter when locking the buffer, you must also include it when unlocking the buffer. Using the flag asymmetrically results in undefined behavior.

> **Important**

>  When accessing pixel data with the GPU, locking is not necessary and can impair performance.

## See Also

### Modifying Pixel Buffers

- [CVPixelBufferFillExtendedPixels](cvpixelbufferfillextendedpixels%28__%29.md): Fills the extended pixels of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.
