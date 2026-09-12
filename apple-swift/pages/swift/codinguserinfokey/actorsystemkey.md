> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codinguserinfokey/actorsystemkey](https://developer.apple.com/documentation/swift/codinguserinfokey/actorsystemkey)

# actorSystemKey

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Key which is required to be set on a `Decoder`’s `userInfo` while attempting to `init(from:)` a `DistributedActor`. The stored value under this key must conform to `DistributedActorSystem`.

## Declaration

```swift
static let actorSystemKey: CodingUserInfoKey
```

<a id="discussion"></a>

## Discussion

Forgetting to set this key will result in that initializer throwing, because an actor system is required in order to call `DistributedActor.resolve(id:using:)` using it.
