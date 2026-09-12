> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactor/id](https://developer.apple.com/documentation/distributed/distributedactor/id)

# id

**Framework:** Distributed  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Logical identity of this distributed actor.

## Declaration

```swift
override nonisolated var id: Self.ID { get }
```

<a id="discussion"></a>

## Discussion

Many distributed actor references may be pointing at, logically, the same actor. For example, calling `resolve(id:using:)` multiple times, is not guaranteed to return the same exact resolved actor instance, however all the references would represent logically references to the same distributed actor, e.g. on a different node.

Depending on the capabilities of the actor system producing the identifiers, the `ID` may also be used to store instance specific metadata.

<a id="Synthesized-property"></a>

## Synthesized property

In concrete distributed actor declarations, a witness for this protocol requirement is synthesized by the compiler.

It is not possible to assign a value to the `id` directly; instead, it is assigned during an actors `init` (or `resolve`), by the managing actor system.
