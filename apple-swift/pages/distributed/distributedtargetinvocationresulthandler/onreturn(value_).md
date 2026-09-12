> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationresulthandler/onreturn(value:)](https://developer.apple.com/documentation/distributed/distributedtargetinvocationresulthandler/onreturn(value:))

# onReturn(value:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Invoked when the distributed target execution returns successfully. The `value` is the return value of the executed distributed invocation target.

## Declaration

```swift
func onReturn<Success>(value: Success) async throws
```

<a id="Serialization-Requirement"></a>

### Serialization Requirement

Implementations of this method must ensure that the `Success` type parameter conforms to the types’ `SerializationRequirement`.
