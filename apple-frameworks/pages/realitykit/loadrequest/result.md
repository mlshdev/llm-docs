> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/loadrequest/result](https://developer.apple.com/documentation/realitykit/loadrequest/result)

# result

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The result of the load operation.

## Declaration

```swift
var result: Result<Output, any Error>? { get }
```

<a id="discussion"></a>

## Discussion

A load operation can have the following results:

- `success(Output)` … The load operation has completed successfully.
- `failure(Error)` … The load operation failed.
- `nil` … The load operation is still in progress.
