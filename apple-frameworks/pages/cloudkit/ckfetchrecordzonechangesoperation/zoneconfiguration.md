> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration)

# CKFetchRecordZoneChangesOperation.ZoneConfiguration (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A configuration object that describes the information to fetch from a record zone.

## Declaration

```swift
class ZoneConfiguration
```

## Topics

### Creating a Zone Change Configuration

- [init(previousServerChangeToken:resultsLimit:desiredKeys:)](zoneconfiguration/init%28previousserverchangetoken_resultslimit_desiredkeys_%29.md): Creates a zone configuration with the desired keys and a result limit for updates.

### Accessing a Zone Change Configuration

- [previousServerChangeToken](zoneconfiguration/previousserverchangetoken.md): The token that identifies the starting point for retrieving changes.
- [resultsLimit](zoneconfiguration/resultslimit.md): The maximum number of records to fetch from the record zone.
- [desiredKeys](zoneconfiguration/desiredkeys.md): The fields to fetch for the requested records.

### Initializers

- [init(coder:)](zoneconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Zone Change Operation

- [configurationsByRecordZoneID](configurationsbyrecordzoneid.md): A dictionary of configurations for fetching change operations by zone identifier.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [recordZoneIDs](recordzoneids.md): The IDs of the record zones that contain the records to fetch.

# CKFetchRecordZoneChangesConfiguration (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A configuration object that describes the information to fetch from a record zone.

## Declaration

```objectivec
@interface CKFetchRecordZoneChangesConfiguration : NSObject
```

## Topics

### Accessing a Zone Change Configuration

- [previousServerChangeToken](zoneconfiguration/previousserverchangetoken.md): The token that identifies the starting point for retrieving changes.
- [resultsLimit](zoneconfiguration/resultslimit.md): The maximum number of records to fetch from the record zone.
- [desiredKeys](../ckfetchrecordzonechangesconfiguration/desiredkeys.md): The fields to fetch for the requested records.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Configuring the Zone Change Operation

- [configurationsByRecordZoneID](configurationsbyrecordzoneid.md): A dictionary of configurations for fetching change operations by zone identifier.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [recordZoneIDs](recordzoneids.md): The IDs of the record zones that contain the records to fetch.
