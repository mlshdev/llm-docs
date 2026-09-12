> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationresulthandler](https://developer.apple.com/documentation/distributed/distributedtargetinvocationresulthandler)

# DistributedTargetInvocationResultHandler

**Framework:** Distributed  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Protocol a distributed invocation execution’s result handler.

## Declaration

```swift
protocol DistributedTargetInvocationResultHandler<SerializationRequirement>
```

<a id="overview"></a>

## Overview

An instance conforming to this type must be passed when invoking [executeDistributedTarget(on:target:invocationDecoder:handler:)](distributedactorsystem/executedistributedtarget%28on_target_invocationdecoder_handler_%29.md) while handling an incoming distributed call.

The handler will then be invoked with the return value (or error) that the invoked target returned (or threw).

## Topics

### Associated Types

- [SerializationRequirement](distributedtargetinvocationresulthandler/serializationrequirement.md): The serialization requirement that the value passed to `onReturn` is required to conform to.

### Instance Methods

- [onReturn(value:)](distributedtargetinvocationresulthandler/onreturn%28value_%29.md): Invoked when the distributed target execution returns successfully. The `value` is the return value of the executed distributed invocation target.
- [onReturnVoid()](distributedtargetinvocationresulthandler/onreturnvoid%28%29.md): Invoked when the distributed target execution of a `Void` returning function has completed successfully.
- [onThrow(error:)](distributedtargetinvocationresulthandler/onthrow%28error_%29.md): Invoked when the distributed target execution of a target has thrown an error.

## Relationships

### Conforming Types

- [LocalTestingInvocationResultHandler](localtestinginvocationresulthandler.md)

## See Also

### Remote Calls

- [RemoteCallTarget](remotecalltarget.md): Represents a ‘target’ of a distributed call, such as a `distributed func` or `distributed` computed property. Identification schemes may vary between systems, and are subject to evolution.
- [RemoteCallArgument](remotecallargument.md): Represents an argument passed to a distributed call target.
- [DistributedTargetInvocationEncoder](distributedtargetinvocationencoder.md): Used to encode an invocation of a distributed target (method or computed property).
- [DistributedTargetInvocationDecoder](distributedtargetinvocationdecoder.md): Decoder that must be provided to `executeDistributedTarget` and is used by the Swift runtime to decode arguments of the invocation.
