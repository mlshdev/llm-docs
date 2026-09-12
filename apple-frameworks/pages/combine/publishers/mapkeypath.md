> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mapkeypath](https://developer.apple.com/documentation/combine/publishers/mapkeypath)

# Publishers.MapKeyPath

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes the value of a key path.

## Declaration

```swift
struct MapKeyPath<Upstream, Output> where Upstream : Publisher
```

## Topics

### Declaring supporting types

- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
- [Publishers.MapKeyPath.Failure](mapkeypath/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](mapkeypath/upstream.md): The publisher from which this publisher receives elements.
- [keyPath](mapkeypath/keypath.md): The key path of a property to publish.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Identifying properties with key paths

- [Publishers.MapKeyPath2](mapkeypath2.md): A publisher that publishes the values of two key paths as a tuple.
- [Publishers.MapKeyPath3](mapkeypath3.md): A publisher that publishes the values of three key paths as a tuple.
