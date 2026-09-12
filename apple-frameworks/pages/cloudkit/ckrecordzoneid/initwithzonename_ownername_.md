> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzoneid/initwithzonename:ownername:](https://developer.apple.com/documentation/cloudkit/ckrecordzoneid/initwithzonename:ownername:)

# initWithZoneName:ownerName:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record zone ID with the specified name and owner.

## Declaration

```objectivec
- (instancetype) initWithZoneName:(NSString *) zoneName ownerName:(NSString *) ownerName;
```

## Parameters

- `zoneName`: The name that identifies the record zone. Zone names consist of up to 255 ASCII characters, and don’t start with an underscore. To specify the default zone of the current database, use [CKRecordZoneDefaultName](../ckrecordzonedefaultname-8mfij.md). This parameter must not be `nil` or an empty string.
- `ownerName`: The user who creates the record zone. To specify the current user, use [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md). If you provide `nil` or an empty string for this parameter, the method throws an exception.

<a id="return-value"></a>

## Return Value

A new record zone ID.
