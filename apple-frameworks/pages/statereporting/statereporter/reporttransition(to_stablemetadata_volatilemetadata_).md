> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/statereporter/reporttransition(to:stablemetadata:volatilemetadata:)](https://developer.apple.com/documentation/statereporting/statereporter/reporttransition(to:stablemetadata:volatilemetadata:))

# reportTransition(to:stableMetadata:volatileMetadata:)

**Framework:** StateReporting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Reports a transition to a new state.

## Declaration

```swift
final func reportTransition(to stateLabel: String?, stableMetadata: StableMetadata? = nil, volatileMetadata: VolatileMetadata? = nil)
```

## Parameters

- `stateLabel`: A descriptive label for the new state, which must not be empty, or `nil` to clear the active state.
- `stableMetadata`: An optional value that identifies the state together with `stateLabel`.
- `volatileMetadata`: An optional value providing context likely to change within this state.

## Mentioned In

- [Getting started with StateReporting](../getting-started-with-statereporting.md)

<a id="discussion"></a>

## Discussion

A transition occurs only when `stateLabel` or `stableMetadata` changes from the current state. If both are equal to the current values, this call is a no-op. Pass `nil` for `stateLabel` to indicate that no state is currently active, clearing any previously reported state. Passing an empty string for `stateLabel` is a fatal error. Any volatile metadata from the previous state is discarded when a new transition begins. Calling this method more frequently than user interaction timescales can trigger rate limiting, causing state updates to go unlogged.
