> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationupdate/updates](https://developer.apple.com/documentation/corelocation/cllocationupdate/updates)

# CLLocationUpdate.Updates

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A structure that represents an asynchronous sequence of location updates.

## Declaration

```swift
struct Updates
```

<a id="overview"></a>

## Overview

[CLLocationUpdate](../cllocationupdate.md) uses this structure to asynchronously deliver a stream of location updates to your app when you call [liveUpdates(\_:)](liveupdates%28__%29.md).

## Topics

### Type aliases

- [CLLocationUpdate.Updates.Iterator](updates/iterator.md): The type of the update’s iterator.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving location updates

- [liveUpdates(\_:)](liveupdates%28__%29.md): Tells Core Location to start delivering the location updates it produces for the configuration you specify.
- [CLLocationUpdate.LiveConfiguration](liveconfiguration.md): Values that indicate the kind of positioning updates the framework delivers.
