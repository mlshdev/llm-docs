> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch/atomicbyzone](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/recordzonechangebatch/atomicbyzone)

# atomicByZone

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that determines whether CloudKit modifies records atomically by record zone.

## Declaration

```swift
var atomicByZone: Bool
```

<a id="discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), CloudKit processes record changes atomically by record zone, and if any individual change fails, all other changes in that record’s record zone fail and return an error of type [CKError.Code.batchRequestFailed](../../ckerror/code/batchrequestfailed.md).

The default value is [false](https://developer.apple.com/documentation/swift/false).
