> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/valuealignedchartscrolltargetbehavior/init(xmatching:yunit:xmajoralignment:ymajoralignment:limitbehavior:)](https://developer.apple.com/documentation/charts/valuealignedchartscrolltargetbehavior/init(xmatching:yunit:xmajoralignment:ymajoralignment:limitbehavior:))

# init(xMatching:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.

## Declaration

```swift
nonisolated init<Y>(xMatching xComponents: DateComponents, yUnit: Y, xMajorAlignment: MajorValueAlignment<Date>? = nil, yMajorAlignment: MajorValueAlignment<Y>? = nil, limitBehavior: ValueAlignedLimitBehavior = .automatic) where Y : Plottable, Y : Numeric
```

## Parameters

- `xComponents`: The alignment components for the x-axis.
- `yUnit`: The alignment unit for the y-axis.
- `xMajorAlignment`: The behavior for aligning to major values along the x-axis.
- `yMajorAlignment`: The behavior for aligning to major values along the y-axis.
- `limitBehavior`: The scroll limit behavior.
