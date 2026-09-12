> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/init(_:)-1ip9h](https://developer.apple.com/documentation/swift/array/init(_:)-1ip9h)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance of a collection containing the elements of a sequence.

## Declaration

```swift
init<S>(_ elements: S) where S : Sequence, Self.Element == S.Element
```

## Parameters

- `elements`: The sequence of elements for the new collection.

## See Also

### Creating an Array

- [init()](init%28%29.md): Creates a new, empty array.
- [init(\_:)](init%28__%29-236cl.md): Creates an array containing the elements of a sequence.
- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new array containing the specified number of a single, repeated value.
- [init(unsafeUninitializedCapacity:initializingWith:)](init%28unsafeuninitializedcapacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.
