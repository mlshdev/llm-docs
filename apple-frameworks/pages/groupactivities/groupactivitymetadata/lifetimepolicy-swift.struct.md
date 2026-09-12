> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.struct](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.struct)

# GroupActivityMetadata.LifetimePolicy

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An activity lifetime policy used by a Group Activity.

## Declaration

```swift
struct LifetimePolicy
```

<a id="overview"></a>

## Overview

Activities that share content owned by the initiator may wish to customize their lifetime policy so that the activity ends when the initiator leaves.

## Topics

### Type Properties

- [automatic](lifetimepolicy-swift.struct/automatic.md): The default lifetime policy for a group activity.
- [endsWhenInitiatorLeaves](lifetimepolicy-swift.struct/endswheninitiatorleaves.md): The activity should end when the initiator of the activity leaves.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
