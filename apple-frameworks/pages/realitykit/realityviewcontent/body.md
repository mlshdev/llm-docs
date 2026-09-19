> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realityviewcontent/body

# RealityViewContent.Body

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The default view contents of a reality view, using reality view content.

## Declaration

```swift
@MainActor @preconcurrency struct Body<Placeholder> where Placeholder : View
```

<a id="overview"></a>

## Overview

You don’t create this type directly. [RealityView](../realityview.md) creates values for you.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
