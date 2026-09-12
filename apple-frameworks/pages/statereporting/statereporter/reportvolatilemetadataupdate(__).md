> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/statereporter/reportvolatilemetadataupdate(_:)](https://developer.apple.com/documentation/statereporting/statereporter/reportvolatilemetadataupdate(_:))

# reportVolatileMetadataUpdate(\_:)

**Framework:** StateReporting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Updates the volatile metadata within the current state without beginning a new transition.

## Declaration

```swift
final func reportVolatileMetadataUpdate(_ updatedMetadata: VolatileMetadata?)
```

## Parameters

- `updatedMetadata`: The updated volatile metadata, or `nil` to clear volatile context without ending the current state.

## Mentioned In

- [Getting started with StateReporting](../getting-started-with-statereporting.md)

<a id="discussion"></a>

## Discussion

Use this method to update rapidly-changing data — such as a progress value or a running count — while staying within the same state. If no state is currently active, this call is a no-op. Calling this method more frequently than user interaction timescales can trigger rate limiting, causing updates to go unlogged.
