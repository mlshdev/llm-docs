> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangesoptions/operationgroup

# operationGroup

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The operation group to use for the underlying CloudKit operations.

## Declaration

```objectivec
@property (strong) CKOperationGroup * operationGroup;
```

<a id="discussion"></a>

## Discussion

> **Tip**

> Providing a specific operation group helps you to identify and analyze the telemetry of send operations in CloudKit Console.

The default value is `nil`.
