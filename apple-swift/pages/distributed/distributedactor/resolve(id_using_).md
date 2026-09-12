> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactor/resolve(id:using:)](https://developer.apple.com/documentation/distributed/distributedactor/resolve(id:using:))

# resolve(id:using:)

**Framework:** Distributed  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Resolves the passed in `id` against the `system`, returning either a local or remote actor reference.

## Declaration

```swift
static func resolve(id: Self.ID, using system: Self.ActorSystem) throws -> Self
```

## Parameters

- `id`: Identity uniquely identifying a, potentially remote, actor in the system
- `system`: `system` which should be used to resolve the `identity`, and be associated with the returned actor

<a id="discussion"></a>

## Discussion

The system will be asked to `resolve` the identity and return either a local instance or request a proxy to be created for this identity.

A remote distributed actor reference will forward all invocations through the system, allowing it to take over the remote messaging with the remote actor instance.

> **Postcondition**

> Upon successful return, the returned actor’s [id](id.md) and [actorSystem](actorsystem-swift.property.md) properties will be equal to the values passed as parameters to this method.
