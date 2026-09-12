> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/init(_:)-9cgks](https://developer.apple.com/documentation/swift/set/init(_:)-9cgks)

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

## See Also

### Creating a Set

- [init()](init%28%29.md): Conforms when `Element` conforms to `Hashable`. Creates an empty set.
- [init(minimumCapacity:)](init%28minimumcapacity_%29.md): Creates an empty set with preallocated space for at least the specified number of elements.
- [init(\_:)](init%28__%29.md): Conforms when `Element` conforms to `Hashable`. Creates a new set from a finite sequence of items.
