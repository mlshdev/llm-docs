> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/property/reduce(into:value:)

# reduce(into:value:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Reduces a property value into an accumulating summary.

## Declaration

```swift
static func reduce(into summary: inout Self.Summary, value: Self.Value)
```

## Parameters

- `summary`: The accumulating summary value to modify.
- `value`: The individual property value to incorporate into the summary.

<a id="discussion"></a>

## Discussion

This method is called to incorporate individual property values into a summary that represents the aggregated state across multiple progress managers.
