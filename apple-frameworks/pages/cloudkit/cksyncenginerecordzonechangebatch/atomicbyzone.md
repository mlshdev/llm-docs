> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginerecordzonechangebatch/atomicbyzone](https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch/atomicbyzone)

# atomicByZone

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that determines whether CloudKit modifies records atomically by record zone.

## Declaration

```objectivec
@property (assign) BOOL atomicByZone;
```

<a id="discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), CloudKit processes record changes atomically by record zone, and if any individual change fails, all other changes in that record’s record zone fail and return an error of type [CKErrorBatchRequestFailed](../ckerror/code/batchrequestfailed.md).

The default value is [false](https://developer.apple.com/documentation/swift/false).
