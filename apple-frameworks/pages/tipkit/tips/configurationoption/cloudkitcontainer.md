> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/cloudkitcontainer](https://developer.apple.com/documentation/tipkit/tips/configurationoption/cloudkitcontainer)

# CloudKitContainer

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type for specifying the CloudKit container used for syncing tips.

## Declaration

```swift
struct CloudKitContainer
```

<a id="overview"></a>

## Overview

For more information on CloudKit syncing, see [cloudKitContainer(\_:)](cloudkitcontainer%28__%29.md).

## Topics

### Type Properties

- [automatic](cloudkitcontainer/automatic.md): Syncs the TipKit datastore using the first container in your app’s entitlements with a “.tips” suffix or, if none is available, the primary container is used.

### Type Methods

- [named(\_:)](cloudkitcontainer/named%28__%29.md): Syncs the TipKit datastore using the specified CloudKit container.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
