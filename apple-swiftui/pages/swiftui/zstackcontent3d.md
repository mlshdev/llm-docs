> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/zstackcontent3d

# ZStackContent3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A type that adds spacing to a [ZStack](zstack.md).

## Declaration

```swift
@frozen nonisolated struct ZStackContent3D<Content> where Content : View
```

<a id="overview"></a>

## Overview

You don’t create this type directly. SwiftUI creates it for you when you use the `ZStack(alignment:spacing:content)` initializer.

## Topics

### Initializers

- [init(spacing:content:)](zstackcontent3d/init%28spacing_content_%29.md)

### Instance Properties

- [content](zstackcontent3d/content.md)
- [spacing](zstackcontent3d/spacing.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [View](view.md)
