> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/sharedcoordinatespaceprovider/eventupdates

# eventUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

A sequence of events that have occurred.

## Declaration

```swift
final var eventUpdates: some AsyncSequence<SharedCoordinateSpaceProvider.Event, Never> { get }
```
