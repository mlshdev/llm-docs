> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/recordzonestosave](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/recordzonestosave)

# recordZonesToSave (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The record zones to save to the database.

## Declaration

```swift
var recordZonesToSave: [CKRecordZone]? { get set }
```

<a id="discussion"></a>

## Discussion

The initial value of the property is the array that you provide to the [init(recordZonesToSave:recordZoneIDsToDelete:)](init%28recordzonestosave_recordzoneidstodelete_%29.md) method. You can modify this array as necessary before you execute the operation. The record zones must all target the same database. You can specify `nil`, or an empty array, for this property.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Zones Operation

- [recordZoneIDsToDelete](recordzoneidstodelete.md): The IDs of the record zones to delete permanently from the database.

# recordZonesToSave (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The record zones to save to the database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKRecordZone *> * recordZonesToSave;
```

<a id="discussion"></a>

## Discussion

The initial value of the property is the array that you provide to the [init(recordZonesToSave:recordZoneIDsToDelete:)](init%28recordzonestosave_recordzoneidstodelete_%29.md) method. You can modify this array as necessary before you execute the operation. The record zones must all target the same database. You can specify `nil`, or an empty array, for this property.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Zones Operation

- [recordZoneIDsToDelete](recordzoneidstodelete.md): The IDs of the record zones to delete permanently from the database.
