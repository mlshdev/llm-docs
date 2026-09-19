> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangesscope/containspendingrecordzonechange:

# containsPendingRecordZoneChange:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns true if this scope includes the given pending change.

## Declaration

```objectivec
- (BOOL) containsPendingRecordZoneChange:(CKSyncEnginePendingRecordZoneChange *) pendingRecordZoneChange;
```
