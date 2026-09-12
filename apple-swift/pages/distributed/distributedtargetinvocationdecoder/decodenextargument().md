> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationdecoder/decodenextargument()](https://developer.apple.com/documentation/distributed/distributedtargetinvocationdecoder/decodenextargument())

# decodeNextArgument()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Attempt to decode the next argument from the underlying buffers into pre-allocated storage pointed at by ‘pointer’.

## Declaration

```swift
mutating func decodeNextArgument<Argument>() throws -> Argument
```

<a id="discussion"></a>

## Discussion

This method should throw if it has no more arguments available, if decoding the argument failed, or, optionally, if the argument type we’re trying to decode does not match the stored type.

The result of the decoding operation must be stored into the provided ‘pointer’ rather than returning a value. This pattern allows the runtime to use a heavily optimized, pre-allocated buffer for all the arguments and their expected types. The ‘pointer’ passed here is a pointer to a “slot” in that pre-allocated buffer. That buffer will then be passed to a thunk that performs the actual distributed (local) instance method invocation.

<a id="Serialization-Requirement"></a>

### Serialization Requirement

Implementations of this method must ensure that the `Argument` type parameter conforms to the types’ `SerializationRequirement`.
