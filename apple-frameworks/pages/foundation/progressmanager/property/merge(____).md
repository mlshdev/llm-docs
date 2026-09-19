> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/property/merge(_:_:)

# merge(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Merges two summary values into a single combined summary.

## Declaration

```swift
static func merge(_ summary1: Self.Summary, _ summary2: Self.Summary) -> Self.Summary
```

## Parameters

- `summary1`: The first summary to merge.
- `summary2`: The second summary to merge.

<a id="return-value"></a>

## Return Value

A new summary that represents the combination of both input summaries.

<a id="discussion"></a>

## Discussion

This method is called to combine summary values from different branches of the progress manager hierarchy into a unified summary.
