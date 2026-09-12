> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.struct](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct)

# CKRecordZone.Capabilities (Swift)

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The capabilities that a record zone supports.

## Declaration

```swift
struct Capabilities
```

## Topics

### Creating Zone Capabilities

- [init(rawValue:)](capabilities-swift.struct/init%28rawvalue_%29.md): Creates a set of capabilities for a record zone.

### Zone Capabilities

- [atomic](capabilities-swift.struct/atomic.md): A capability that allows atomic changes of multiple records.
- [fetchChanges](capabilities-swift.struct/fetchchanges.md): A capability for fetching only the changed records from a zone.
- [sharing](capabilities-swift.struct/sharing.md): A capability for sharing a specific hierarchy of records.
- [zoneWideSharing](capabilities-swift.struct/zonewidesharing.md): A capability for sharing the entire contents of a record zone.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the Zone Attributes

- [zoneID](zoneid.md): The unique ID of the zone.
- [capabilities](capabilities-swift.property.md): The capabilities that the zone supports.

# CKRecordZoneCapabilities (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The capabilities that a record zone supports.

## Declaration

```objectivec
enum CKRecordZoneCapabilities : NSUInteger;
```

## Topics

### Zone Capabilities

- [CKRecordZoneCapabilityAtomic](capabilities-swift.struct/atomic.md): A capability that allows atomic changes of multiple records.
- [CKRecordZoneCapabilityFetchChanges](capabilities-swift.struct/fetchchanges.md): A capability for fetching only the changed records from a zone.
- [CKRecordZoneCapabilitySharing](capabilities-swift.struct/sharing.md): A capability for sharing a specific hierarchy of records.
- [CKRecordZoneCapabilityZoneWideSharing](capabilities-swift.struct/zonewidesharing.md): A capability for sharing the entire contents of a record zone.

## See Also

### Getting the Zone Attributes

- [zoneID](zoneid.md): The unique ID of the zone.
- [capabilities](capabilities-swift.property.md): The capabilities that the zone supports.
