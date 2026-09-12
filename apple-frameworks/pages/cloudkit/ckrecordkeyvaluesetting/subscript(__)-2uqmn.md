> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvaluesetting/subscript(_:)-2uqmn](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/subscript(_:)-2uqmn)

# subscript(\_:)

**Framework:** CloudKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS · watchOS 3.0+

Accesses the value for the specified key in the record.

## Declaration

```swift
@nonobjc subscript(key: CKRecord.FieldKey) -> (any CKRecordValueProtocol)? { get set }
```
