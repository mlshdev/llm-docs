> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/init()](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty modify records operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set at least one of the [recordsToSave](recordstosave.md) or [recordIDsToDelete](recordidstodelete.md) properties before you execute the operation.

## See Also

### Creating a Modify Record Operation

- [init(recordsToSave:recordIDsToDelete:)](init%28recordstosave_recordidstodelete_%29.md): Creates an operation for modifying the specified records.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty modify records operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set at least one of the [recordsToSave](recordstosave.md) or [recordIDsToDelete](recordidstodelete.md) properties before you execute the operation.

## See Also

### Creating a Modify Record Operation

- [initWithRecordsToSave:recordIDsToDelete:](initwithrecordstosave_recordidstodelete_.md): Creates an operation for modifying the specified records.
