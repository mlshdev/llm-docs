> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/receivediscontiguous(minimumincompletelength:maximumlength:completion:)](https://developer.apple.com/documentation/network/nwconnection/receivediscontiguous(minimumincompletelength:maximumlength:completion:))

# receiveDiscontiguous(minimumIncompleteLength:maximumLength:completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
@preconcurrency final func receiveDiscontiguous(minimumIncompleteLength: Int, maximumLength: Int, completion: @escaping @Sendable (DispatchData?, NWConnection.ContentContext?, Bool, NWError?) -> Void)
```
