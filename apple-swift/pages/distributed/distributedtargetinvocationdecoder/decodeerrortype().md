> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationdecoder/decodeerrortype()](https://developer.apple.com/documentation/distributed/distributedtargetinvocationdecoder/decodeerrortype())

# decodeErrorType()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Decode the specific error type that the distributed invocation target has recorded. Currently this effectively can only ever be `Error.self`.

## Declaration

```swift
mutating func decodeErrorType() throws -> (any Any.Type)?
```

<a id="discussion"></a>

## Discussion

If the target known to not be throwing, or no error type was recorded, the method should return `nil`.
