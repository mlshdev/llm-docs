> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationencoder](https://developer.apple.com/documentation/distributed/distributedtargetinvocationencoder)

# DistributedTargetInvocationEncoder

**Framework:** Distributed  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Used to encode an invocation of a distributed target (method or computed property).

## Declaration

```swift
protocol DistributedTargetInvocationEncoder<SerializationRequirement>
```

<a id="Forming-an-invocation"></a>

## Forming an invocation

On the sending-side an instance of an invocation is constructed by the runtime, and calls to: `recordGenericSubstitution`, `recordArgument`, `recordReturnType`, `recordErrorType`, and finally `doneRecording` are made (in this order).

If the return type of the target is `Void` the `recordReturnType` is not invoked.

If the error type thrown by the target is not defined the `recordErrorType` is not invoked.

An invocation implementation may decide to perform serialization right-away in the `record...` invocations, or it may choose to delay doing so until the invocation is passed to the `remoteCall`. This decision largely depends on if serialization is allowed to happen on the caller’s task, and if any smarter encoding can be used once all parameter calls have been recorded (e.g. it may be possible to run-length encode values of certain types etc.)

Once encoded, the system should use some underlying transport mechanism to send the bytes serialized by the invocation to the remote peer.

<a id="Decoding-an-invocation"></a>

## Decoding an invocation

Since every actor system is going to deal with a concrete invocation type, they may implement decoding them whichever way is most optimal for the given system.

Once decided, the invocation must be passed to `executeDistributedTarget` which will decode the substitutions, argument values, return and error types (in that order).

Note that the decoding will be provided the specific types that the sending side used to preform the call, so decoding can rely on simply invoking e.g. `Codable` (if that is the `SerializationRequirement`) decoding entry points on the provided types.

## Topics

### Associated Types

- [SerializationRequirement](distributedtargetinvocationencoder/serializationrequirement.md): The serialization requirement that the types passed to `recordArgument` and `recordReturnType` are required to conform to.

### Instance Methods

- [doneRecording()](distributedtargetinvocationencoder/donerecording%28%29.md): Invoked to signal to the encoder that no further `record...` calls will be made on it.
- [recordArgument(\_:)](distributedtargetinvocationencoder/recordargument%28__%29.md): Record an argument of `Argument` type. This will be invoked for every argument of the target, in declaration order.
- [recordErrorType(\_:)](distributedtargetinvocationencoder/recorderrortype%28__%29.md): Record the error type of the distributed method. This method will not be invoked if the target is not throwing.
- [recordGenericSubstitution(\_:)](distributedtargetinvocationencoder/recordgenericsubstitution%28__%29.md): The arguments must be encoded order-preserving, and once `decodeGenericSubstitutions` is called, the substitutions must be returned in the same order in which they were recorded.
- [recordReturnType(\_:)](distributedtargetinvocationencoder/recordreturntype%28__%29.md): Record the return type of the distributed method. This method will not be invoked if the target is returning `Void`.

## Relationships

### Conforming Types

- [LocalTestingInvocationEncoder](localtestinginvocationencoder.md)

## See Also

### Remote Calls

- [RemoteCallTarget](remotecalltarget.md): Represents a ‘target’ of a distributed call, such as a `distributed func` or `distributed` computed property. Identification schemes may vary between systems, and are subject to evolution.
- [RemoteCallArgument](remotecallargument.md): Represents an argument passed to a distributed call target.
- [DistributedTargetInvocationDecoder](distributedtargetinvocationdecoder.md): Decoder that must be provided to `executeDistributedTarget` and is used by the Swift runtime to decode arguments of the invocation.
- [DistributedTargetInvocationResultHandler](distributedtargetinvocationresulthandler.md): Protocol a distributed invocation execution’s result handler.
