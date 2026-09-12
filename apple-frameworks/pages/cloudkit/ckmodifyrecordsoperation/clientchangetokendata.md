> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/clientchangetokendata](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/clientchangetokendata)

# clientChangeTokenData (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A token that tracks local changes to records.

## Declaration

```swift
var clientChangeTokenData: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

When you modify records from a fetch operation, specify a token using this property to indicate which version of the record you most recently modified. Compare the token you supply to the token in the next record fetch to confirm the server  successfully receives the device’s most recent modify request.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordsToSave](recordstosave.md): The records to save to the database.
- [recordIDsToDelete](recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [isAtomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKModifyRecordsOperation.RecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.

# clientChangeTokenData (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A token that tracks local changes to records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * clientChangeTokenData;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

When you modify records from a fetch operation, specify a token using this property to indicate which version of the record you most recently modified. Compare the token you supply to the token in the next record fetch to confirm the server  successfully receives the device’s most recent modify request.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordsToSave](recordstosave.md): The records to save to the database.
- [recordIDsToDelete](recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [atomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKRecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
