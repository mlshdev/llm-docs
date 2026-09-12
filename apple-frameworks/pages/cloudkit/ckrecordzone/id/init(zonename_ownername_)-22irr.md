> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/id/init(zonename:ownername:)-22irr](https://developer.apple.com/documentation/cloudkit/ckrecordzone/id/init(zonename:ownername:)-22irr)

# init(zoneName:ownerName:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Creates a record zone ID with the specified name and owner.

## Declaration

```swift
convenience init(zoneName: String = CKRecordZone.ID.defaultZoneName, ownerName: String = CKCurrentUserDefaultName)
```

## Parameters

- `zoneName`: The name that identifies the record zone. Zone names consist of up to 255 ASCII characters, and don’t start with an underscore. To specify the default zone of the current database, use  [defaultZoneName](defaultzonename.md). This parameter must not be `nil` or an empty string.
- `ownerName`: The user who creates the record zone. To specify the current user, use [CKCurrentUserDefaultName](../../ckcurrentuserdefaultname.md). If you provide `nil` or an empty string for this parameter, the method throws an exception.

<a id="return-value"></a>

## Return Value

A new record zone ID.
