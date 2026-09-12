> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/zoneid](https://developer.apple.com/documentation/cloudkit/ckrecordzone/zoneid)

# zoneID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The unique ID of the zone.

## Declaration

```swift
@NSCopying var zoneID: CKRecordZone.ID { get }
```

<a id="discussion"></a>

## Discussion

The zone ID contains the name of the zone and the name of the user who owns the zone. Use this property to access both of those values.

## See Also

### Getting the Zone Attributes

- [capabilities](capabilities-swift.property.md): The capabilities that the zone supports.
- [CKRecordZone.Capabilities](capabilities-swift.struct.md): The capabilities that a record zone supports.

# zoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The unique ID of the zone.

## Declaration

```objectivec
@property (copy, readonly) CKRecordZoneID * zoneID;
```

<a id="discussion"></a>

## Discussion

The zone ID contains the name of the zone and the name of the user who owns the zone. Use this property to access both of those values.

## See Also

### Getting the Zone Attributes

- [capabilities](capabilities-swift.property.md): The capabilities that the zone supports.
- [CKRecordZoneCapabilities](capabilities-swift.struct.md): The capabilities that a record zone supports.
