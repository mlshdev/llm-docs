> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/text/alignmentstrategy/default

# default

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The default strategy based on the context it is used in.

## Declaration

```swift
static let `default`: Text.AlignmentStrategy
```

<a id="discussion"></a>

## Discussion

The default strategy for [Text](../../text.md) is [layoutBased](layoutbased.md). UI components that accept user input, such as [TextEditor](../../texteditor.md) and [TextField](../../textfield.md), default to [writingDirectionBased](writingdirectionbased.md).
