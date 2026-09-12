> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/init(_:)](https://developer.apple.com/documentation/swift/setalgebra/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new set from a finite sequence of items.

## Declaration

```swift
init<S>(_ sequence: S) where S : Sequence, Self.Element == S.Element
```

## Parameters

- `sequence`: The elements to use as members of the new set.

<a id="discussion"></a>

## Discussion

Use this initializer to create a new set from an existing sequence, like an array or a range:

```swift
let validIndices = Set(0..<7).subtracting([2, 4, 5])
print(validIndices)
// Prints "[6, 0, 1, 3]"
```

## Default Implementations

### SetAlgebra Implementations

- [init(\_:)](init%28__%29-5ink1.md): Creates a new set from a finite sequence of items.
