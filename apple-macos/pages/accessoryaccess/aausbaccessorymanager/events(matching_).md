> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymanager/events(matching:)

# events(matching:)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns an asynchronous list of events that match the provided criteria.

## Declaration

```swift
func events(matching criteria: [AAUSBAccessoryMatchingCriteria]) async throws -> some AsyncSequence<AAUSBAccessory.Event, Never>

```

## Parameters

- `criteria`: An array of [AAUSBAccessoryMatchingCriteria](../aausbaccessorymatchingcriteria.md) to use to filter events.
