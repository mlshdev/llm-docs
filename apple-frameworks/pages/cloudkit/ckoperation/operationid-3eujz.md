> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/operationid-3eujz](https://developer.apple.com/documentation/cloudkit/ckoperation/operationid-3eujz)

# operationID

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for a long-lived operation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKOperationID operationID;
```

<a id="discussion"></a>

## Discussion

Pass this property’s value to the [longLivedOperation(for:)](../ckcontainer/longlivedoperation%28for_%29.md) method to fetch the corresponding long-lived operation. For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Identifying the Operation

- [CKOperationID](../ckoperationid.md): A type that represents the ID of an operation.
