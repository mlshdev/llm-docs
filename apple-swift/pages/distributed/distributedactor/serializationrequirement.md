> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactor/serializationrequirement](https://developer.apple.com/documentation/distributed/distributedactor/serializationrequirement)

# SerializationRequirement

**Framework:** Distributed  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The serialization requirement to apply to all distributed declarations inside the actor.

## Declaration

```swift
associatedtype SerializationRequirement where Self.SerializationRequirement == Self.ActorSystem.SerializationRequirement
```
