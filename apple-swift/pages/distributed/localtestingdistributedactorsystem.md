> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/localtestingdistributedactorsystem](https://developer.apple.com/documentation/distributed/localtestingdistributedactorsystem)

# LocalTestingDistributedActorSystem

**Framework:** Distributed  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A `DistributedActorSystem` designed for local only testing.

## Declaration

```swift
final class LocalTestingDistributedActorSystem
```

<a id="overview"></a>

## Overview

It will crash on any attempt of remote communication, but can be useful for learning about `distributed actor` isolation, as well as early prototyping stages of development where a real system is not necessary yet.

## Topics

### Initializers

- [init()](localtestingdistributedactorsystem/init%28%29.md)

## Relationships

### Conforms To

- [DistributedActorSystem](distributedactorsystem.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Local Testing

- [LocalTestingActorID](localtestingactorid.md)
- [LocalTestingActorAddress](localtestingactoraddress.md): Deprecated.
- [LocalTestingInvocationEncoder](localtestinginvocationencoder.md)
- [LocalTestingInvocationDecoder](localtestinginvocationdecoder.md)
- [LocalTestingInvocationResultHandler](localtestinginvocationresulthandler.md)
