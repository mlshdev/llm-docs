> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesentdatabasechangesevent/deletedzoneids](https://developer.apple.com/documentation/cloudkit/cksyncenginesentdatabasechangesevent/deletedzoneids)

# deletedZoneIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The unique identifiers of the deleted record zones.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKRecordZoneID *> * deletedZoneIDs;
```

## See Also

### Accessing successful changes

- [savedZones](savedzones.md): The modified record zones.
