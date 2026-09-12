> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/encryptionscope-swift.enum](https://developer.apple.com/documentation/cloudkit/ckrecordzone/encryptionscope-swift.enum)

# CKRecordZone.EncryptionScope (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
enum EncryptionScope
```

## Topics

### Enumeration Cases

- [CKRecordZone.EncryptionScope.perRecord](encryptionscope-swift.enum/perrecord.md): Zone uses per-record encryption keys for any encrypted values on a record or share.
- [CKRecordZone.EncryptionScope.perZone](encryptionscope-swift.enum/perzone.md): Zone uses per-zone encryption keys for encrypted values across all records and the zone-wide share, if present.

### Initializers

- [init(rawValue:)](encryptionscope-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKRecordZoneEncryptionScope (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
enum CKRecordZoneEncryptionScope : NSInteger;
```

## Topics

### Enumeration Cases

- [CKRecordZoneEncryptionScopePerRecord](encryptionscope-swift.enum/perrecord.md): Zone uses per-record encryption keys for any encrypted values on a record or share.
- [CKRecordZoneEncryptionScopePerZone](encryptionscope-swift.enum/perzone.md): Zone uses per-zone encryption keys for encrypted values across all records and the zone-wide share, if present.
