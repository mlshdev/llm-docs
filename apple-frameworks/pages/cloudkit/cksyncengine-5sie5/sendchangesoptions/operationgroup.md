> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/operationgroup](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/operationgroup)

# operationGroup

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The operation group to use for the underlying CloudKit operations.

## Declaration

```swift
var operationGroup: CKOperationGroup { get set }
```

<a id="discussion"></a>

## Discussion

> **Tip**

> Providing a specific operation group helps you to identify and analyze the telemetry of send operations in CloudKit Console.

The default value is `nil`.

## See Also

### Managing attributes

- [description](description.md): A textual description of the options that’s suitable for logging.
