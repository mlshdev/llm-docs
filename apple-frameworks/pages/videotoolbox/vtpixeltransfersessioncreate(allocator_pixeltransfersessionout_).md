> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixeltransfersessioncreate(allocator:pixeltransfersessionout:)](https://developer.apple.com/documentation/videotoolbox/vtpixeltransfersessioncreate(allocator:pixeltransfersessionout:))

# VTPixelTransferSessionCreate(allocator:pixelTransferSessionOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

Creates a session for transferring images between Core Video image buffers that hold pixels in main memory.

## Declaration

```swift
func VTPixelTransferSessionCreate(allocator: CFAllocator?, pixelTransferSessionOut: UnsafeMutablePointer<VTPixelTransferSession?>) -> OSStatus
```

## Parameters

- `allocator`: An allocator for the session.  Pass `NULL` to use the default allocator.
- `pixelTransferSessionOut`: Points to a variable to receive the new pixel transfer session.

<a id="Discussion"></a>

## Discussion

The function creates a session for transferring images between [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) objects.

# VTPixelTransferSessionCreate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

Creates a session for transferring images between Core Video image buffers that hold pixels in main memory.

## Declaration

```objectivec
extern OSStatus VTPixelTransferSessionCreate(CFAllocatorRef allocator, VTPixelTransferSessionRef*pixelTransferSessionOut);
```

## Parameters

- `allocator`: An allocator for the session.  Pass `NULL` to use the default allocator.
- `pixelTransferSessionOut`: Points to a variable to receive the new pixel transfer session.

<a id="Discussion"></a>

## Discussion

The function creates a session for transferring images between [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) objects.
