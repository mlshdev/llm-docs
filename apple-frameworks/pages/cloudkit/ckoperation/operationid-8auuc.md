> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/operationid-8auuc](https://developer.apple.com/documentation/cloudkit/ckoperation/operationid-8auuc)

# operationID

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS · watchOS 3.0+ · Swift 4.2+

A unique identifier for a long-lived operation.

## Declaration

```swift
var operationID: CKOperation.ID { get }
```

<a id="discussion"></a>

## Discussion

Pass this property’s value to the [longLivedOperation(for:)](../ckcontainer/longlivedoperation%28for_%29.md) method to fetch the corresponding long-lived operation. For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Identifying the Operation

- [CKOperation.ID](id.md): A type that represents the ID of an operation.
