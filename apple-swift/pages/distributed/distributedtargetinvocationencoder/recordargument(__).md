> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationencoder/recordargument(_:)](https://developer.apple.com/documentation/distributed/distributedtargetinvocationencoder/recordargument(_:))

# recordArgument(\_:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Record an argument of `Argument` type. This will be invoked for every argument of the target, in declaration order.

## Declaration

```swift
mutating func recordArgument<Value>(_ argument: RemoteCallArgument<Value>) throws
```

<a id="Serialization-Requirement"></a>

### Serialization Requirement

Implementations of this method must ensure that the `Value` type parameter conforms to the types’ `SerializationRequirement`.
