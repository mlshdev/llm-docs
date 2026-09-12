> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorsystem/actorready(_:)](https://developer.apple.com/documentation/distributed/distributedactorsystem/actorready(_:))

# actorReady(\_:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Invoked during a distributed actor’s initialization, as soon as it becomes fully initialized.

## Declaration

```swift
func actorReady<Act>(_ actor: Act) where Act : DistributedActor, Self.ActorID == Act.ID
```

## Parameters

- `actor`: Reference to the (local) actor that was just fully initialized.

<a id="discussion"></a>

## Discussion

The system is expected to store the reference to this actor, and maintain an `ActorID: DistributedActor` mapping for the purpose of implementing the `resolve(id:as:)` method.

The system usually should NOT retain the passed reference, and it will be informed via [resignID(\_:)](resignid%28__%29.md) when the actor has been deallocated so it can remove the stale reference from its internal `ActorID: DistributedActor` mapping.

The [id](../distributedactor/id.md) of the passed actor must be an [ActorID](actorid.md) that this system previously has assigned.

If `actorReady` gets called with some unknown ID, it should crash immediately as it signifies some very unexpected use of the system.
