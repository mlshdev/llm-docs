> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/id/init(recordname:)](https://developer.apple.com/documentation/cloudkit/ckrecord/id/init(recordname:))

# init(recordName:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a new record ID with the specified name in the default zone.

## Declaration

```swift
convenience init(recordName: String)
```

## Parameters

- `recordName`: The name that identifies the record. The string must contain only ASCII characters, must not exceed 255 characters, and must not start with an underscore. If you specify an empty string for this parameter, the method throws an exception.

<a id="return-value"></a>

## Return Value

An initialized record ID object.

<a id="discussion"></a>

## Discussion

Use this method when you’re creating or searching for records in the default zone.

## See Also

### Creating a Record ID

- [init(recordName:zoneID:)](init%28recordname_zoneid_%29.md): Creates a new record ID with the specified name and zone information.
- [CKRecordNameZoneWideShare](../../ckrecordnamezonewideshare.md): The name of a share record that manages a shared record zone.

# initWithRecordName: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a new record ID with the specified name in the default zone.

## Declaration

```objectivec
- (instancetype) initWithRecordName:(NSString *) recordName;
```

## Parameters

- `recordName`: The name that identifies the record. The string must contain only ASCII characters, must not exceed 255 characters, and must not start with an underscore. If you specify an empty string for this parameter, the method throws an exception.

<a id="return-value"></a>

## Return Value

An initialized record ID object.

<a id="discussion"></a>

## Discussion

Use this method when you’re creating or searching for records in the default zone.

## See Also

### Creating a Record ID

- [initWithRecordName:zoneID:](../../ckrecordid/initwithrecordname_zoneid_.md): Creates a new record ID with the specified name and zone information.
- [CKRecordNameZoneWideShare](../../ckrecordnamezonewideshare.md): The name of a share record that manages a shared record zone.
