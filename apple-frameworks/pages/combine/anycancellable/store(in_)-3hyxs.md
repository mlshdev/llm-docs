> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anycancellable/store(in:)-3hyxs](https://developer.apple.com/documentation/combine/anycancellable/store(in:)-3hyxs)

# store(in:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Stores this type-erasing cancellable instance in the specified set.

## Declaration

```swift
final func store(in set: inout Set<AnyCancellable>)
```

## Parameters

- `set`: The set in which to store this [AnyCancellable](../anycancellable.md).

## See Also

### Storing instances

- [store(in:)](store%28in_%29-6cr9i.md): Stores this type-erasing cancellable instance in the specified collection.
