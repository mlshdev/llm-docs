> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontentbuilder/buildlimitedavailability(_:)](https://developer.apple.com/documentation/charts/chartcontentbuilder/buildlimitedavailability(_:))

# buildLimitedAvailability(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds a partial result that propagates or erases type information outside a compiler-controlled availability check.

## Declaration

```swift
static func buildLimitedAvailability(_ content: some ChartContent) -> AnyChartContent
```

<a id="discussion"></a>

## Discussion

This method provides support for `if` statements with `#available()` clauses in multi-statement closures, producing content for the conditionally-available branch.
