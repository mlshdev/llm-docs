> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/pendingdatatransferreport/collect(queue:completion:)](https://developer.apple.com/documentation/network/nwconnection/pendingdatatransferreport/collect(queue:completion:))

# collect(queue:completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Stops an outstanding data transfer report and delivers the result.

## Declaration

```swift
@preconcurrency func collect(queue: DispatchQueue, completion: @escaping @Sendable (NWConnection.DataTransferReport) -> Void)
```
