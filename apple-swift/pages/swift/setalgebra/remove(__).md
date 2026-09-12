> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/remove(_:)](https://developer.apple.com/documentation/swift/setalgebra/remove(_:))

# remove(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the given element and any elements subsumed by the given element.

## Declaration

```swift
@discardableResult mutating func remove(_ member: Self.Element) -> Self.Element?
```

## Parameters

- `member`: The element of the set to remove.

<a id="return-value"></a>

## Return Value

For ordinary sets, an element equal to `member` if `member` is contained in the set; otherwise, `nil`. In some cases, a returned element may be distinguishable from `member` by identity comparison or some other means.

For sets where the set type and element type are the same, like `OptionSet` types, this method returns any intersection between the set and `[member]`, or `nil` if the intersection is empty.

## Default Implementations

### SetAlgebra Implementations

- [remove(\_:)](remove%28__%29-1pj2m.md): Conforms when `Self` is `Self.Element`. Removes the given element and all elements subsumed by it.

## See Also

### Adding and Removing Elements

- [insert(\_:)](insert%28__%29.md): Inserts the given element in the set if it is not already present.
- [update(with:)](update%28with_%29.md): Inserts the given element into the set unconditionally.
