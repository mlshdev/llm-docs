> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferunlockbaseaddress(_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferunlockbaseaddress(_:_:))

# CVPixelBufferUnlockBaseAddress(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unlocks the base address of the pixel buffer.

## Declaration

```swift
func CVPixelBufferUnlockBaseAddress(_ pixelBuffer: CVPixelBuffer, _ unlockFlags: CVPixelBufferLockFlags) -> CVReturn
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to unlock.
- `unlockFlags`: The option you passed when you locked the buffer. Pass [readOnly](cvpixelbufferlockflags/readonly.md) if you locked the buffer for reading only, or pass no flags if you locked it for both reading and writing.

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
- [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.

# CVPixelBufferUnlockBaseAddress (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unlocks the base address of the pixel buffer.

## Declaration

```objectivec
extern CVReturn CVPixelBufferUnlockBaseAddress(CVPixelBufferRef pixelBuffer, CVPixelBufferLockFlags unlockFlags);
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to unlock.
- `unlockFlags`: The option you passed when you locked the buffer. Pass [kCVPixelBufferLock_ReadOnly](cvpixelbufferlockflags/readonly.md) if you locked the buffer for reading only, or pass no flags if you locked it for both reading and writing.

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
- [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.
