> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/executedistributedtargeterror](https://developer.apple.com/documentation/distributed/executedistributedtargeterror)

# ExecuteDistributedTargetError

**Framework:** Distributed  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Error thrown by [executeDistributedTarget(on:target:invocationDecoder:handler:)](distributedactorsystem/executedistributedtarget%28on_target_invocationdecoder_handler_%29.md).

## Declaration

```swift
struct ExecuteDistributedTargetError
```

<a id="overview"></a>

## Overview

Inspect the [errorCode](executedistributedtargeterror/errorcode-swift.property.md) for details about the underlying reason this error was thrown.

## Topics

### Initializers

- [init(message:)](executedistributedtargeterror/init%28message_%29.md)
- [init(message:errorCode:)](executedistributedtargeterror/init%28message_errorcode_%29.md)

### Instance Properties

- [errorCode](executedistributedtargeterror/errorcode-swift.property.md)
- [message](executedistributedtargeterror/message.md)

### Enumerations

- [ExecuteDistributedTargetError.ErrorCode](executedistributedtargeterror/errorcode-swift.enum.md)

## Relationships

### Conforms To

- [DistributedActorSystemError](distributedactorsystemerror.md)
- [Error](../swift/error.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Errors

- [DistributedActorCodingError](distributedactorcodingerror.md): Error thrown by distributed actor systems while encountering encoding/decoding issues.
- [DistributedActorSystemError](distributedactorsystemerror.md): Error protocol to which errors thrown by any `DistributedActorSystem` should conform.
- [LocalTestingDistributedActorSystemError](localtestingdistributedactorsystemerror.md)
