> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/init(_:)-236cl](https://developer.apple.com/documentation/swift/array/init(_:)-236cl)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an array containing the elements of a sequence.

## Declaration

```swift
init<S>(_ s: S) where Element == S.Element, S : Sequence
```

## Parameters

- `s`: The sequence of elements to turn into an array.

<a id="discussion"></a>

## Discussion

You can use this initializer to create an array from any other type that conforms to the `Sequence` protocol. For example, you might want to create an array with the integers from 1 through 7. Use this initializer around a range instead of typing all those numbers in an array literal.

```swift
let numbers = Array(1...7)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 6, 7]"
```

You can also use this initializer to convert a complex sequence or collection type back to an array. For example, the `keys` property of a dictionary isn’t an array with its own storage, it’s a collection that maps its elements from the dictionary only when they’re accessed, saving the time and space needed to allocate an array. If you need to pass those keys to a method that takes an array, however, use this initializer to convert that list from its type of `LazyMapCollection<Dictionary<String, Int>, Int>` to a simple `[String]`.

```swift
func cacheImages(withNames names: [String]) {
    // custom image loading and caching
 }

let namedHues: [String: Int] = ["Vermillion": 18, "Magenta": 302,
        "Gold": 50, "Cerise": 320]
let colorNames = Array(namedHues.keys)
cacheImages(withNames: colorNames)

print(colorNames)
// Prints "["Gold", "Cerise", "Magenta", "Vermillion"]"
```

## See Also

### Creating an Array

- [init()](init%28%29.md): Creates a new, empty array.
- [init(\_:)](init%28__%29-1ip9h.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new array containing the specified number of a single, repeated value.
- [init(unsafeUninitializedCapacity:initializingWith:)](init%28unsafeuninitializedcapacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.
