> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/markstackingmethod/standard

# standard

**Framework:** Swift Charts  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Stack marks starting at zero.

## Declaration

```swift
static var standard: MarkStackingMethod { get }
```

<a id="discussion"></a>

## Discussion

Negative values appear below zero, creating diverging stacked marks.
