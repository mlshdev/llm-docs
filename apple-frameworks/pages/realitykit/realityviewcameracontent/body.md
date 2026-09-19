> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realityviewcameracontent/body

# RealityViewCameraContent.Body

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

The default view contents of a [RealityView](../realityview.md) using [RealityViewCameraContent](../realityviewcameracontent.md).

## Declaration

```swift
@MainActor @preconcurrency struct Body<Placeholder> where Placeholder : View
```

<a id="overview"></a>

## Overview

You don’t directly create instances of this type because [RealityView](../realityview.md) creates them for you.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
