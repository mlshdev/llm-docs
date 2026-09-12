> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/init(minimumcapacity:)](https://developer.apple.com/documentation/swift/set/init(minimumcapacity:))

# init(minimumCapacity:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty set with preallocated space for at least the specified number of elements.

## Declaration

```swift
init(minimumCapacity: Int)
```

## Parameters

- `minimumCapacity`: The minimum number of elements that the newly created set should be able to store without reallocating its storage buffer.

<a id="discussion"></a>

## Discussion

Use this initializer to avoid intermediate reallocations of a set’s storage buffer when you know how many elements you’ll insert into the set after creation.

## See Also

### Creating a Set

- [init()](init%28%29.md): Conforms when `Element` conforms to `Hashable`. Creates an empty set.
- [init(\_:)](init%28__%29-9cgks.md): Creates a new set from a finite sequence of items.
- [init(\_:)](init%28__%29.md): Conforms when `Element` conforms to `Hashable`. Creates a new set from a finite sequence of items.
