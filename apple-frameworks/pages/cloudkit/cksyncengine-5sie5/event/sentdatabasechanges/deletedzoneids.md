> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/sentdatabasechanges/deletedzoneids

# deletedZoneIDs

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The unique identifiers of the deleted record zones.

## Declaration

```swift
let deletedZoneIDs: [CKRecordZone.ID]
```

## See Also

### Accessing successful changes

- [savedZones](savedzones.md): The modified record zones.
