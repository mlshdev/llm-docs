> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/receivemessagediscontiguous(completion:)](https://developer.apple.com/documentation/network/nwconnection/receivemessagediscontiguous(completion:))

# receiveMessageDiscontiguous(completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
@preconcurrency final func receiveMessageDiscontiguous(completion: @escaping @Sendable (DispatchData?, NWConnection.ContentContext?, Bool, NWError?) -> Void)
```
