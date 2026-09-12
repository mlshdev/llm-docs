> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/partialerrorsbyitemid](https://developer.apple.com/documentation/cloudkit/ckerror/partialerrorsbyitemid)

# partialErrorsByItemID

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

The dictionary that contains errors that relate to individual record operations.

## Declaration

```swift
var partialErrorsByItemID: [AnyHashable : any Error]? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is a dictionary that maps an item ID to an error. The type of each ID depends on where the error occurs. For example, if you receive a partial error when modifying a record, the ID is an instance of [CKRecord.ID](../ckrecord/id.md) that corresponds to the record that CloudKit can’t modify.

The error’s `userInfo` dictionary contains the same value as this property. You can access it using the [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key.
