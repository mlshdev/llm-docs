> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/subscript(_:)-4f12u

# subscript(\_:)

**Framework:** CloudKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS · watchOS 3.0+

Accesses the value for the specified key in the record.

## Declaration

```swift
@nonobjc subscript<T>(key: CKRecord.FieldKey) -> T? where T : CKRecordValueProtocol { get set }
```
