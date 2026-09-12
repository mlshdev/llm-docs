> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontentbuilder/buildblock(_:)-51ukk](https://developer.apple.com/documentation/charts/chartcontentbuilder/buildblock(_:)-51ukk)

# buildBlock(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Builds a result from multiple components.

## Declaration

```swift
static func buildBlock<each C>(_ content: repeat each C) -> some ChartContent where repeat each C : ChartContent

```

## Parameters

- `content`: The components.
