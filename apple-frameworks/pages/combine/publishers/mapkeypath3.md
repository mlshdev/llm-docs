> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mapkeypath3](https://developer.apple.com/documentation/combine/publishers/mapkeypath3)

# Publishers.MapKeyPath3

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes the values of three key paths as a tuple.

## Declaration

```swift
struct MapKeyPath3<Upstream, Output0, Output1, Output2> where Upstream : Publisher
```

## Topics

### Declaring supporting types

- [Publishers.MapKeyPath3.Output](mapkeypath3/output.md): The kind of values published by this publisher.
- [Publishers.MapKeyPath3.Failure](mapkeypath3/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](mapkeypath3/upstream.md): The publisher from which this publisher receives elements.
- [keyPath0](mapkeypath3/keypath0.md): The key path of a property to publish.
- [keyPath1](mapkeypath3/keypath1.md): The key path of a second property to publish.
- [keyPath2](mapkeypath3/keypath2.md): The key path of a third property to publish.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Identifying properties with key paths

- [Publishers.MapKeyPath](mapkeypath.md): A publisher that publishes the value of a key path.
- [Publishers.MapKeyPath2](mapkeypath2.md): A publisher that publishes the values of two key paths as a tuple.
