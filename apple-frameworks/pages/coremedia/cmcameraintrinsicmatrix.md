> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmcameraintrinsicmatrix](https://developer.apple.com/documentation/coremedia/cmcameraintrinsicmatrix)

# CMCameraIntrinsicMatrix

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A matrix that describes the camera’s intrinsic properties.

## Declaration

```swift
struct CMCameraIntrinsicMatrix
```

<a id="overview"></a>

## Overview

This matrix has the following content

```
 fx  0   ox
 0   fy  oy
 0   0   1
```

fx and fy are the focal length in pixels. For square pixels, they will have the same value. ox and oy are the coordinates of the principal point. The origin is the upper left of the frame.

## Topics

### Initializers

- [init(matrix:)](cmcameraintrinsicmatrix/init%28matrix_%29.md)

### Instance Properties

- [matrix](cmcameraintrinsicmatrix/matrix.md)

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
