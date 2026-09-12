> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/init()](https://developer.apple.com/documentation/swift/set/init())

# init()

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty set.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

This is equivalent to initializing with an empty array literal. For example:

```swift
var emptySet = Set<Int>()
print(emptySet.isEmpty)
// Prints "true"

emptySet = []
print(emptySet.isEmpty)
// Prints "true"
```

## See Also

### Creating a Set

- [init(minimumCapacity:)](init%28minimumcapacity_%29.md): Creates an empty set with preallocated space for at least the specified number of elements.
- [init(\_:)](init%28__%29-9cgks.md): Creates a new set from a finite sequence of items.
- [init(\_:)](init%28__%29.md): Conforms when `Element` conforms to `Hashable`. Creates a new set from a finite sequence of items.
