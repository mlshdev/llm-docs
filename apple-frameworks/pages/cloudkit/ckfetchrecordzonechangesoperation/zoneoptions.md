> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions)

# CKFetchRecordZoneChangesOperation.ZoneOptions (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

A configuration object that describes the information to fetch from a record zone.

> Use [CKFetchRecordZoneChangesOperation.ZoneConfiguration](zoneconfiguration.md) instead.

## Declaration

```swift
class ZoneOptions
```

## Topics

### Zone Change Options

- [desiredKeys](zoneoptions/desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [previousServerChangeToken](zoneoptions/previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](zoneoptions/resultslimit.md): Deprecated. The maximum number of records to fetch from the record zone.

### Initializers

- [init(coder:)](zoneoptions/init%28coder_%29.md): Deprecated.

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

## See Also

### Deprecated Methods

- [init(recordZoneIDs:optionsByRecordZoneID:)](init%28recordzoneids_optionsbyrecordzoneid_%29.md): Deprecated. Creates an operation for fetching record zone changes.

# CKFetchRecordZoneChangesOptions (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

A configuration object that describes the information to fetch from a record zone.

> Use [CKFetchRecordZoneChangesConfiguration](zoneconfiguration.md) instead.

## Declaration

```objectivec
@interface CKFetchRecordZoneChangesOptions : NSObject
```

## Topics

### Zone Change Options

- [desiredKeys](zoneoptions/desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [previousServerChangeToken](zoneoptions/previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](zoneoptions/resultslimit.md): Deprecated. The maximum number of records to fetch from the record zone.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Deprecated Methods

- [initWithRecordZoneIDs:optionsByRecordZoneID:](init%28recordzoneids_optionsbyrecordzoneid_%29.md): Deprecated. Creates an operation for fetching record zone changes.
