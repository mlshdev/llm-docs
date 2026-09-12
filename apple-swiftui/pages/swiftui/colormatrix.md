> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colormatrix](https://developer.apple.com/documentation/swiftui/colormatrix)

# ColorMatrix

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A matrix to use in an RGBA color transformation.

## Declaration

```swift
@frozen struct ColorMatrix
```

<a id="overview"></a>

## Overview

The matrix has five columns, each with a red, green, blue, and alpha component. You can use the matrix for tasks like creating a color transformation [GraphicsContext.Filter](graphicscontext/filter.md) for a [GraphicsContext](graphicscontext.md) using the [colorMatrix(\_:)](graphicscontext/filter/colormatrix%28__%29.md) method.

## Topics

### Creating an identity matrix

- [init()](colormatrix/init%28%29.md): Creates the identity matrix.

### First column

- [r1](colormatrix/r1.md)
- [g1](colormatrix/g1.md)
- [b1](colormatrix/b1.md)
- [a1](colormatrix/a1.md)

### Second column

- [r2](colormatrix/r2.md)
- [g2](colormatrix/g2.md)
- [b2](colormatrix/b2.md)
- [a2](colormatrix/a2.md)

### Third column

- [r3](colormatrix/r3.md)
- [g3](colormatrix/g3.md)
- [b3](colormatrix/b3.md)
- [a3](colormatrix/a3.md)

### Fourth column

- [r4](colormatrix/r4.md)
- [g4](colormatrix/g4.md)
- [b4](colormatrix/b4.md)
- [a4](colormatrix/a4.md)

### Fifth column

- [r5](colormatrix/r5.md)
- [g5](colormatrix/g5.md)
- [b5](colormatrix/b5.md)
- [a5](colormatrix/a5.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying blur and shadows

- [blur(radius:opaque:)](view/blur%28radius_opaque_%29.md): Applies a Gaussian blur to this view.
- [shadow(color:radius:x:y:)](view/shadow%28color_radius_x_y_%29.md): Adds a shadow to this view.
