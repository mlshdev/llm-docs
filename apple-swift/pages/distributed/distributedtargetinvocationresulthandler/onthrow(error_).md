> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationresulthandler/onthrow(error:)](https://developer.apple.com/documentation/distributed/distributedtargetinvocationresulthandler/onthrow(error:))

# onThrow(error:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Invoked when the distributed target execution of a target has thrown an error.

## Declaration

```swift
func onThrow<Err>(error: Err) async throws where Err : Error
```

<a id="discussion"></a>

## Discussion

It is not guaranteed that the error conform to the [SerializationRequirement](serializationrequirement.md); This guarantee is only given to return values (and offered by `onReturn`).
