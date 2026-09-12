> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mainactor](https://developer.apple.com/documentation/swift/mainactor)

# MainActor

**Framework:** Swift  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A singleton actor whose executor is equivalent to the main dispatch queue.

## Declaration

```swift
@globalActor final actor MainActor
```

## Topics

### Instance Properties

- [unownedExecutor](mainactor/unownedexecutor.md): Retrieve the executor for this actor as an optimized, unowned reference.

### Instance Methods

- [enqueue(\_:)](mainactor/enqueue%28__%29.md)

### Type Aliases

- [MainActor.ActorType](mainactor/actortype.md): The type of the shared actor instance that will be used to provide mutually-exclusive access to declarations annotated with the given global actor type.

### Type Properties

- [shared](mainactor/shared.md): The shared actor instance that will be used to provide mutually-exclusive access to declarations annotated with the given global actor type.
- [sharedUnownedExecutor](mainactor/sharedunownedexecutor.md): Shorthand for referring to the `shared.unownedExecutor` of this global actor.

### Type Methods

- [assumeIsolated(\_:file:line:)](mainactor/assumeisolated%28__file_line_%29.md): Assume that the current task is executing on the main actor’s serial executor, or stop program execution.
- [run(resultType:body:)](mainactor/run%28resulttype_body_%29.md): Execute the given body closure on the main actor.

### Default Implementations

- [Actor Implementations](mainactor/actor-implementations.md)
- [GlobalActor Implementations](mainactor/globalactor-implementations.md)

## Relationships

### Conforms To

- [Actor](actor.md)
- [GlobalActor](globalactor.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Actors

- [Sendable](sendable.md): A thread-safe type whose values can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [Actor](actor.md): Common protocol to which all actors conform.
- [GlobalActor](globalactor.md): A type that represents a globally-unique actor that can be used to isolate various declarations anywhere in the program.
- [SendableMetatype](sendablemetatype.md): A type whose metatype can be shared across arbitrary isolation domains without introducing a risk of data races.
- [isolation()](isolation%28%29.md): Produce a reference to the actor to which the enclosing code is isolated, or `nil` if the code is nonisolated.
