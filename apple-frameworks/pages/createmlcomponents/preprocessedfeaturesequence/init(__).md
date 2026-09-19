> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/preprocessedfeaturesequence/init(_:)

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates an asynchronous sequence of stored temporal features.

## Declaration

```swift
init<S>(_ sequence: S) async throws where Feature == S.Feature, S : TemporalSequence
```

## Parameters

- `sequence`: An asynchronous sequence of temporal features.
