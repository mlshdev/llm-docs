> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/state-swift.class/zoneidswithunfetchedserverchanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/state-swift.class/zoneidswithunfetchedserverchanges)

# zoneIDsWithUnfetchedServerChanges

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The identifiers of zones with changes on the server that have not yet been fetched.

## Declaration

```swift
final var zoneIDsWithUnfetchedServerChanges: [CKRecordZone.ID] { get }
```

<a id="discussion"></a>

## Discussion

The sync engine populates this list automatically, for example when receiving a push notification indicating new changes.
