> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/observationtoken](https://developer.apple.com/documentation/foundation/notificationcenter/observationtoken)

# NotificationCenter.ObservationToken

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A unique token representing a single observer registration in a notification center.

## Declaration

```swift
struct ObservationToken
```

<a id="overview"></a>

## Overview

You receive the `ObservationToken` type as a return value from `addObserver(of:for:using:)` and related methods.

Retain the `ObservationToken` for as long as you need to continue observation, since observation ends when the token goes out of scope. You can also explicitly stop observing by passing the token to `removeObserver(_:)-(ObservationToken)`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing concurrency-safe notifications

- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-4d19x.md): Adds an observer to a center for messages delivered on the main actor with a given subject and identifier.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-90os.md): Adds an observer to a center for messages delivered on the main actor with a given subject and identifier.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-56bn4.md): Adds an observer to a center for messages delivered on the main actor with a given subject and message type.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-twm3.md): Adds an observer to a center for messages delivered asynchronously with a given subject and identifier.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-t1wr.md): Adds an observer to a center for messages delivered asynchronously with a given subject and message type.
- [addObserver(of:for:using:)](addobserver%28of_for_using_%29-64uw3.md): Adds an observer to a center for messages delivered asynchronously with a given subject and message type.
- [removeObserver(\_:)](removeobserver%28__%29-2gmm0.md): Stops the observation represented by the given observation token.
