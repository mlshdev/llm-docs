> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/init()](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty modify record zones operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set at least one of the [recordZonesToSave](recordzonestosave.md) or [recordZoneIDsToDelete](recordzoneidstodelete.md) properties before you execute the operation.

## See Also

### Creating a Modify Zones Operation

- [init(recordZonesToSave:recordZoneIDsToDelete:)](init%28recordzonestosave_recordzoneidstodelete_%29.md): Creates an operation for modifying the specified record zones.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty modify record zones operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set at least one of the [recordZonesToSave](recordzonestosave.md) or [recordZoneIDsToDelete](recordzoneidstodelete.md) properties before you execute the operation.

## See Also

### Creating a Modify Zones Operation

- [initWithRecordZonesToSave:recordZoneIDsToDelete:](initwithrecordzonestosave_recordzoneidstodelete_.md): Creates an operation for modifying the specified record zones.
