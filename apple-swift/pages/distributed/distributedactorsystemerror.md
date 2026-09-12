> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorsystemerror](https://developer.apple.com/documentation/distributed/distributedactorsystemerror)

# DistributedActorSystemError

**Framework:** Distributed  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Error protocol to which errors thrown by any `DistributedActorSystem` should conform.

## Declaration

```swift
protocol DistributedActorSystemError : Error
```

## Relationships

### Inherits From

- [Error](../swift/error.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

### Conforming Types

- [DistributedActorCodingError](distributedactorcodingerror.md)
- [ExecuteDistributedTargetError](executedistributedtargeterror.md)
- [LocalTestingDistributedActorSystemError](localtestingdistributedactorsystemerror.md)

## See Also

### Errors

- [DistributedActorCodingError](distributedactorcodingerror.md): Error thrown by distributed actor systems while encountering encoding/decoding issues.
- [ExecuteDistributedTargetError](executedistributedtargeterror.md): Error thrown by [executeDistributedTarget(on:target:invocationDecoder:handler:)](distributedactorsystem/executedistributedtarget%28on_target_invocationdecoder_handler_%29.md).
- [LocalTestingDistributedActorSystemError](localtestingdistributedactorsystemerror.md)
