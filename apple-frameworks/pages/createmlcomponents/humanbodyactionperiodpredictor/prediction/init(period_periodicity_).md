> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/humanbodyactionperiodpredictor/prediction/init(period:periodicity:)

# init(period:periodicity:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a human body action period prediction.

## Declaration

```swift
init(period: Float, periodicity: Float)
```

## Parameters

- `period`: A period length of a repetitive action.
- `periodicity`: A value that indicates whether a frame belongs to a periodic action.
