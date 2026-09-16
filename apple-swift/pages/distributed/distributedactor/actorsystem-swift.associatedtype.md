> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/distributed/distributedactor/actorsystem-swift.associatedtype

# ActorSystem

**Framework:** Distributed  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type of transport used to communicate with actors of this type.

## Declaration

```swift
associatedtype ActorSystem : DistributedActorSystem where Self.ID == Self.ActorSystem.ActorID
```
