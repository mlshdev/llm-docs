> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorsystem/actorid](https://developer.apple.com/documentation/distributed/distributedactorsystem/actorid)

# ActorID

**Framework:** Distributed  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type ID that will be assigned to any distributed actor managed by this actor system.

## Declaration

```swift
associatedtype ActorID : Hashable, Sendable
```

<a id="A-note-on-Codable-IDs"></a>

### A note on Codable IDs

If this type is `Codable`, then any `distributed actor` using this `ActorID` as its [id](../distributedactor/id.md) will gain a synthesized `Codable` conformance which is implemented by encoding the `ID`. The decoding counter part of the `Codable` conformance is implemented by decoding the `ID` and passing it to the [resolve(id:using:)](../distributedactor/resolve%28id_using_%29.md) method.
