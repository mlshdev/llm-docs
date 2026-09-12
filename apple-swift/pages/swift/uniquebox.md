> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquebox](https://developer.apple.com/documentation/swift/uniquebox)

# UniqueBox

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A smart pointer type that uniquely owns an instance of `Value` on the heap.

## Declaration

```swift
@frozen struct UniqueBox<Value> where Value : ~Copyable
```

## Topics

### Initializers

- [init(\_:)](uniquebox/init%28__%29.md): Initializes a value of this unqiue box with the given initial value.

### Instance Properties

- [mutableSpan](uniquebox/mutablespan.md): A mutable span over the single element stored in this box.
- [span](uniquebox/span.md): A span over the single element stored in this box.
- [value](uniquebox/value.md): Dereferences the unique box allowing for in-place reads and writes to the stored `Value`.

### Instance Methods

- [clone()](uniquebox/clone%28%29.md): Copies the value within the unqiue box and returns it in a new unique instance.
- [consume()](uniquebox/consume%28%29.md): Consumes the unique box and returns the instance of `Value` that was within the box.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Heap Storage

- [UniqueArray](uniquearray.md): A dynamically self-resizing, heap allocated, noncopyable array of potentially noncopyable elements.
