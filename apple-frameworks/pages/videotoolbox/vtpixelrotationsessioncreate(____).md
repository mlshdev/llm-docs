> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixelrotationsessioncreate(_:_:)](https://developer.apple.com/documentation/videotoolbox/vtpixelrotationsessioncreate(_:_:))

# VTPixelRotationSessionCreate(\_:\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a session to rotate images between pixel buffers.

## Declaration

```swift
func VTPixelRotationSessionCreate(_ allocator: CFAllocator?, _ pixelRotationSessionOut: UnsafeMutablePointer<VTPixelRotationSession?>) -> OSStatus
```

## Parameters

- `allocator`: An allocator for the session. Specify `NULL` to use the default allocator.
- `pixelRotationSessionOut`: On output, an initialized pixel rotation session.

## See Also

### Managing a Session

- [VTPixelRotationSessionInvalidate(\_:)](vtpixelrotationsessioninvalidate%28__%29.md): Tears down a pixel rotation session.

# VTPixelRotationSessionCreate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a session to rotate images between pixel buffers.

## Declaration

```objectivec
extern OSStatus VTPixelRotationSessionCreate(CFAllocatorRef allocator, VTPixelRotationSessionRef*pixelRotationSessionOut);
```

## Parameters

- `allocator`: An allocator for the session. Specify `NULL` to use the default allocator.
- `pixelRotationSessionOut`: On output, an initialized pixel rotation session.

## See Also

### Managing a Session

- [VTPixelRotationSessionInvalidate](vtpixelrotationsessioninvalidate%28__%29.md): Tears down a pixel rotation session.
