> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/hashable/hash(into:)](https://developer.apple.com/documentation/swift/hashable/hash(into:))

# hash(into:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to use when combining the components of this instance.

<a id="discussion"></a>

## Discussion

Implement this method to conform to the `Hashable` protocol. The components used for hashing must be the same as the components compared in your type’s `==` operator implementation. Call `hasher.combine(_:)` with each of these components.

> **Important**

> In your implementation of `hash(into:)`, don’t call `finalize()` on the `hasher` instance provided, or replace it with a different instance. Doing so may become a compile-time error in the future.

## Default Implementations

### DistributedActor Implementations

- [hash(into:)](../../distributed/distributedactor/hash%28into_%29.md): A distributed actor’s hash and equality is implemented by directly delegating to its [id](../../distributed/distributedactor/id.md).

### Hashable Implementations

- [hash(into:)](hash%28into_%29-3gv4c.md): Hashes the essential components of this value by feeding them into the given hasher.
- [hash(into:)](hash%28into_%29-86617.md): Hashes the elements of the vector using the given hasher.
