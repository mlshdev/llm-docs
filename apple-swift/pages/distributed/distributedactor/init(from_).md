> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactor/init(from:)](https://developer.apple.com/documentation/distributed/distributedactor/init(from:))

# init(from:)

**Framework:** Distributed  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Initializes an instance of this distributed actor by decoding its [id](id.md), and passing it to the `DistributedActorSystem` obtained from `decoder.userInfo[actorSystemKey]`.

## Declaration

```swift
nonisolated init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: Used to decode the [id](id.md) of this distributed actor.

<a id="Requires-The-decoder-must-have-the-CodingUserInfoKeyactorSystemKey-set-to"></a>

## Requires: The decoder must have the \`CodingUserInfoKey.actorSystemKey\` set to

the [ActorSystem](actorsystem-swift.associatedtype.md) that this actor expects, as it will be used to call [resolve(id:using:)](resolve%28id_using_%29.md) on, in order to obtain the instance this initializer should return.

> **Throws**

> If the actor system value in `decoder.userInfo` is missing or mistyped; the `ID` fails to decode from the passed `decoder`;
