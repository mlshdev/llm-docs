> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/operationtimedout

# operationTimedOut

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the operation timed out.

## Declaration

```swift
static var operationTimedOut: HMError.Code { get }
```

## See Also

### Detecting operation errors

- [operationCancelled](operationcancelled.md): An error indicating the user canceled the operation.
- [operationInProgress](operationinprogress.md): An error indicating the operation is already in progress.
