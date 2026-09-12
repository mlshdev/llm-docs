> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixelrotationsessioninvalidate(_:)](https://developer.apple.com/documentation/videotoolbox/vtpixelrotationsessioninvalidate(_:))

# VTPixelRotationSessionInvalidate(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Tears down a pixel rotation session.

## Declaration

```swift
func VTPixelRotationSessionInvalidate(_ session: VTPixelRotationSession)
```

## Parameters

- `session`: The pixel rotation session to invalidate.

<a id="Discussion"></a>

## Discussion

When a pixel rotation session’s retain count reaches zero, the system automatically invalidates it. However, because other processes may retain a session, it can be hard to predict when the invalidation occurs. Calling this function ensures a deterministic, orderly teardown.

## See Also

### Managing a Session

- [VTPixelRotationSessionCreate(\_:\_:)](vtpixelrotationsessioncreate%28____%29.md): Creates a session to rotate images between pixel buffers.

# VTPixelRotationSessionInvalidate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Tears down a pixel rotation session.

## Declaration

```objectivec
extern void VTPixelRotationSessionInvalidate(VTPixelRotationSessionRef session);
```

## Parameters

- `session`: The pixel rotation session to invalidate.

<a id="Discussion"></a>

## Discussion

When a pixel rotation session’s retain count reaches zero, the system automatically invalidates it. However, because other processes may retain a session, it can be hard to predict when the invalidation occurs. Calling this function ensures a deterministic, orderly teardown.

## See Also

### Managing a Session

- [VTPixelRotationSessionCreate](vtpixelrotationsessioncreate%28____%29.md): Creates a session to rotate images between pixel buffers.
