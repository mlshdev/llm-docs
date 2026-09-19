> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/axiscontentbuilder/buildblock(_:)-6p3cy

# buildBlock(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Builds a result from multiple components.

## Declaration

```swift
static func buildBlock<each T>(_ content: repeat each T) -> some AxisContent where repeat each T : AxisContent

```

## Parameters

- `content`: The components.
