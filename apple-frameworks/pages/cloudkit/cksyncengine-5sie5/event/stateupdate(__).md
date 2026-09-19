> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/stateupdate(_:)

# CKSyncEngine.Event.stateUpdate(\_:)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine updated its state.

## Declaration

```swift
case stateUpdate(CKSyncEngine.Event.StateUpdate)
```

<a id="discussion"></a>

## Discussion

You should persist it locally.

## See Also

### State updates

- [CKSyncEngine.Event.StateUpdate](stateupdate.md): The sync engine state was updated, and you should persist it locally.
