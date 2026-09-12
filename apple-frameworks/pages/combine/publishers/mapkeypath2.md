> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mapkeypath2](https://developer.apple.com/documentation/combine/publishers/mapkeypath2)

# Publishers.MapKeyPath2

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes the values of two key paths as a tuple.

## Declaration

```swift
struct MapKeyPath2<Upstream, Output0, Output1> where Upstream : Publisher
```

## Topics

### Declaring supporting types

- [Publishers.MapKeyPath2.Output](mapkeypath2/output.md): The kind of values published by this publisher.
- [Publishers.MapKeyPath2.Failure](mapkeypath2/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](mapkeypath2/upstream.md): The publisher from which this publisher receives elements.
- [keyPath0](mapkeypath2/keypath0.md): The key path of a property to publish.
- [keyPath1](mapkeypath2/keypath1.md): The key path of a second property to publish.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Identifying properties with key paths

- [Publishers.MapKeyPath](mapkeypath.md): A publisher that publishes the value of a key path.
- [Publishers.MapKeyPath3](mapkeypath3.md): A publisher that publishes the values of three key paths as a tuple.
