> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler/activate(for:)](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler/activate(for:))

# activate(for:)

**Framework:** Accessory Live Activities  
**Kind:** Instance Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Establishes communication between the data provider extension and the system.

## Declaration

```swift
func activate(for session: LiveActivityForwarding.Session)
```

## Parameters

- `session`: A session object that enables communication between your accessory’s data provider extension and the system.

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Store a reference to the session and use it to receive life-cycle events and updates to ongoing Live Activities. The session becomes invalid after the system calls [sessionInvalidated()](sessioninvalidated%28%29.md) to indicate that the system won’t deliver Live Activities to your accessory. Don’t use the session after invalidation.

## See Also

### Managing the session life cycle

- [sessionInvalidated()](sessioninvalidated%28%29.md): Indicates that the system invalidated the session and stopped sending Live Activity updates.
