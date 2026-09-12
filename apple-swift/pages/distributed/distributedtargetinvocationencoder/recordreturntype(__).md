> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationencoder/recordreturntype(_:)](https://developer.apple.com/documentation/distributed/distributedtargetinvocationencoder/recordreturntype(_:))

# recordReturnType(\_:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Record the return type of the distributed method. This method will not be invoked if the target is returning `Void`.

## Declaration

```swift
mutating func recordReturnType<R>(_ type: R.Type) throws
```

<a id="Serialization-Requirement"></a>

### Serialization Requirement

Implementations of this method must ensure that the `R` type parameter conforms to the types’ `SerializationRequirement`.
