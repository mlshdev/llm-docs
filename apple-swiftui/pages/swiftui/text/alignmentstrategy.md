> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/text/alignmentstrategy

# Text.AlignmentStrategy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The way SwiftUI infers the appropriate text alignment if no value is explicitly provided.

## Declaration

```swift
struct AlignmentStrategy
```

<a id="overview"></a>

## Overview

> **Note**

> [Text](../text.md) tightly wraps its content, so text alignment only affects how lines are positioned relative to each other. The text as a whole needs to be positioned at the view level using [Alignment](../alignment.md).

## Topics

### Type Properties

- [default](alignmentstrategy/default.md): The default strategy based on the context it is used in.
- [layoutBased](alignmentstrategy/layoutbased.md): The alignment following the environment setting.
- [writingDirectionBased](alignmentstrategy/writingdirectionbased.md): The alignment following the writing direction of the same paragraph.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
