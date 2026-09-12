> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/globalactor](https://developer.apple.com/documentation/swift/globalactor)

# GlobalActor

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents a globally-unique actor that can be used to isolate various declarations anywhere in the program.

## Declaration

```swift
protocol GlobalActor
```

<a id="overview"></a>

## Overview

A type that conforms to the `GlobalActor` protocol and is marked with the `@globalActor` attribute can be used as a custom attribute. Such types are called global actor types, and can be applied to any declaration to specify that such types are isolated to that global actor type. When using such a declaration from another actor (or from nonisolated code), synchronization is performed through the shared actor instance to ensure mutually-exclusive access to the declaration.

<a id="Custom-Actor-Executors"></a>

## Custom Actor Executors

A global actor uses a custom executor if it needs to customize its execution semantics, for example, by making sure all of its invocations are run on a specific thread or dispatch queue.

This is done the same way as with normal non-global actors, by declaring a [unownedExecutor](actor/unownedexecutor.md) nonisolated property in the [ActorType](globalactor/actortype.md) underlying this global actor.

It is *not* necessary to override the [sharedUnownedExecutor](globalactor/sharedunownedexecutor.md) static property of the global actor, as its default implementation already delegates to the `shared.unownedExecutor`, which is the most reasonable and correct implementation of this protocol requirement.

You can find out more about custom executors, by referring to the [SerialExecutor](serialexecutor.md) protocol’s documentation.

> **See Also**

> [SerialExecutor](serialexecutor.md)

## Topics

### Associated Types

- [ActorType](globalactor/actortype.md): The type of the shared actor instance that will be used to provide mutually-exclusive access to declarations annotated with the given global actor type.

### Type Properties

- [shared](globalactor/shared.md): The shared actor instance that will be used to provide mutually-exclusive access to declarations annotated with the given global actor type.
- [sharedUnownedExecutor](globalactor/sharedunownedexecutor.md): Shorthand for referring to the `shared.unownedExecutor` of this global actor.

### Type Methods

- [assertIsolated(\_:file:line:)](globalactor/assertisolated%28__file_line_%29.md): Stops program execution if the current task is not executing on this actor’s serial executor.
- [preconditionIsolated(\_:file:line:)](globalactor/preconditionisolated%28__file_line_%29.md): Stops program execution if the current task is not executing on this actor’s serial executor.

## Relationships

### Conforming Types

- [MainActor](mainactor.md)

## See Also

### Actors

- [Sendable](sendable.md): A thread-safe type whose values can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [Actor](actor.md): Common protocol to which all actors conform.
- [MainActor](mainactor.md): A singleton actor whose executor is equivalent to the main dispatch queue.
- [SendableMetatype](sendablemetatype.md): A type whose metatype can be shared across arbitrary isolation domains without introducing a risk of data races.
- [isolation()](isolation%28%29.md): Produce a reference to the actor to which the enclosing code is isolated, or `nil` if the code is nonisolated.
