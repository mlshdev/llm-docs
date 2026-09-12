> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginependingrecordzonechangetype](https://developer.apple.com/documentation/cloudkit/cksyncenginependingrecordzonechangetype)

# CKSyncEnginePendingRecordZoneChangeType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type of change in a record zone that needs to be sent to the server.

## Declaration

```swift
enum CKSyncEnginePendingRecordZoneChangeType
```

## Topics

### Enumeration Cases

- [CKSyncEnginePendingRecordZoneChangeType.deleteRecord](cksyncenginependingrecordzonechangetype/deleterecord.md)
- [CKSyncEnginePendingRecordZoneChangeType.saveRecord](cksyncenginependingrecordzonechangetype/saverecord.md)

### Initializers

- [init(rawValue:)](cksyncenginependingrecordzonechangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKSyncEnginePendingRecordZoneChangeType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type of change in a record zone that needs to be sent to the server.

## Declaration

```objectivec
enum CKSyncEnginePendingRecordZoneChangeType : NSInteger;
```

## Topics

### Enumeration Cases

- [CKSyncEnginePendingRecordZoneChangeTypeDeleteRecord](cksyncenginependingrecordzonechangetype/deleterecord.md)
- [CKSyncEnginePendingRecordZoneChangeTypeSaveRecord](cksyncenginependingrecordzonechangetype/saverecord.md)

## See Also

### Accessing the modified record

- [recordID](cksyncenginependingrecordzonechange/recordid.md): The identifier of the modified record.
- [type](cksyncenginependingrecordzonechange/type.md): The type of change to make.
