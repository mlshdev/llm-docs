> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorcodingerror](https://developer.apple.com/documentation/distributed/distributedactorcodingerror)

# DistributedActorCodingError

**Framework:** Distributed  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Error thrown by distributed actor systems while encountering encoding/decoding issues.

## Declaration

```swift
struct DistributedActorCodingError
```

<a id="overview"></a>

## Overview

Also thrown when an attempt to decode [DistributedActor](distributedactor.md) is made, but no [DistributedActorSystem](distributedactorsystem.md) is available in the `Decoder`’s `userInfo[.actorSystemKey]`, as it is required to perform the resolve call.

## Topics

### Initializers

- [init(message:)](distributedactorcodingerror/init%28message_%29.md)

### Instance Properties

- [message](distributedactorcodingerror/message.md)

### Type Methods

- [missingActorSystemUserInfo(\_:)](distributedactorcodingerror/missingactorsystemuserinfo%28__%29.md)

## Relationships

### Conforms To

- [DistributedActorSystemError](distributedactorsystemerror.md)
- [Error](../swift/error.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Errors

- [DistributedActorSystemError](distributedactorsystemerror.md): Error protocol to which errors thrown by any `DistributedActorSystem` should conform.
- [ExecuteDistributedTargetError](executedistributedtargeterror.md): Error thrown by [executeDistributedTarget(on:target:invocationDecoder:handler:)](distributedactorsystem/executedistributedtarget%28on_target_invocationdecoder_handler_%29.md).
- [LocalTestingDistributedActorSystemError](localtestingdistributedactorsystemerror.md)
