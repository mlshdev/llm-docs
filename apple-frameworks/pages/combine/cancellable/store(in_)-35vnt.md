> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/cancellable/store(in:)-35vnt

# store(in:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Stores this cancellable instance in the specified collection.

## Declaration

```swift
func store<C>(in collection: inout C) where C : RangeReplaceableCollection, C.Element == AnyCancellable
```

## Parameters

- `collection`: The collection in which to store this [Cancellable](../cancellable.md).

## See Also

### Storing instances

- [store(in:)](store%28in_%29-95sfl.md): Stores this cancellable instance in the specified set.
