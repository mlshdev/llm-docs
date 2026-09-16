> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/squareazimuth/set

# SquareAzimuth.Set

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A set of horizontal directions that specify how someone can look at a volume.

## Declaration

```swift
@frozen struct Set
```

<a id="overview"></a>

## Overview

Combine the [SquareAzimuth](../squareazimuth.md) constants to name several directions at once. Pass a set to [supportedVolumeViewpoints(\_:)](../view/supportedvolumeviewpoints%28__%29.md) to say which sides the window bar and ornaments of a volume should follow someone to.

```swift
VolumeContentView()
    .supportedVolumeViewpoints([.front, .left])
```

A volume supports [all](set/all.md) unless you narrow it. Narrow the set when your content only makes sense from certain sides, such as a model with a defined back that you never want someone to see the controls through.

## Topics

### Initializers

- [init(\_:)](set/init%28__%29.md): Creates a set containing only the specified [SquareAzimuth](../squareazimuth.md).

### Instance Methods

- [contains(\_:)](set/contains%28__%29.md): Returns a Boolean value that indicates whether the set contains the specified [SquareAzimuth](../squareazimuth.md).

### Type Properties

- [all](set/all.md): A set containing all four of the [SquareAzimuth](../squareazimuth.md) constants.
- [back](set/back.md): A set containing only [SquareAzimuth.back](back.md).
- [front](set/front.md): A set containing only [SquareAzimuth.front](front.md).
- [left](set/left.md): A set containing only [SquareAzimuth.left](left.md).
- [right](set/right.md): A set containing only [SquareAzimuth.right](right.md).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
