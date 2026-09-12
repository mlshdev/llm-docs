> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/init()](https://developer.apple.com/documentation/swift/array/init())

# init()

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new, empty array.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

This is equivalent to initializing with an empty array literal. For example:

```swift
var emptyArray = Array<Int>()
print(emptyArray.isEmpty)
// Prints "true"

emptyArray = []
print(emptyArray.isEmpty)
// Prints "true"
```

## See Also

### Creating an Array

- [init(\_:)](init%28__%29-1ip9h.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](init%28__%29-236cl.md): Creates an array containing the elements of a sequence.
- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new array containing the specified number of a single, repeated value.
- [init(unsafeUninitializedCapacity:initializingWith:)](init%28unsafeuninitializedcapacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.
