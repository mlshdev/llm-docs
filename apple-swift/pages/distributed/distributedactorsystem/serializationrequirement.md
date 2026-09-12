> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorsystem/serializationrequirement](https://developer.apple.com/documentation/distributed/distributedactorsystem/serializationrequirement)

# SerializationRequirement

**Framework:** Distributed  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The serialization requirement that will be applied to all distributed targets used with this system.

## Declaration

```swift
associatedtype SerializationRequirement where Self.SerializationRequirement == Self.InvocationDecoder.SerializationRequirement
```
