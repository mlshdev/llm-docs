> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartscrolltargetbehavior/valuealigned(xunit:yunit:xmajoralignment:ymajoralignment:limitbehavior:)](https://developer.apple.com/documentation/charts/chartscrolltargetbehavior/valuealigned(xunit:yunit:xmajoralignment:ymajoralignment:limitbehavior:))

# valueAligned(xUnit:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.

## Declaration

```swift
static func valueAligned<X, Y>(xUnit: X, yUnit: Y, xMajorAlignment: MajorValueAlignment<X>? = nil, yMajorAlignment: MajorValueAlignment<Y>? = nil, limitBehavior: ValueAlignedLimitBehavior = .automatic) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior, X : Plottable, X : Numeric, Y : Plottable, Y : Numeric
```

## Parameters

- `xUnit`: The alignment unit for the x-axis.
- `yUnit`: The alignment unit for the y-axis.
- `xMajorAlignment`: The behavior for aligning to major values along the x-axis.
- `yMajorAlignment`: The behavior for aligning to major values along the y-axis.
- `limitBehavior`: The scroll limit behavior.
