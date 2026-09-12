> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/first](https://developer.apple.com/documentation/swift/dictionary/first)

# first

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The first element of the collection.

## Declaration

```swift
var first: Self.Element? { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, the value of this property is `nil`.

```swift
let numbers = [10, 20, 30, 40, 50]
if let firstNumber = numbers.first {
    print(firstNumber)
}
// Prints "10"
```

## See Also

### Accessing Keys and Values

- [subscript(\_:)](subscript%28__%29-8rfql.md): Conforms when `Key` conforms to `Hashable`. Accesses the value associated with the given key for reading and writing.
- [subscript(\_:default:)](subscript%28__default_%29.md): Conforms when `Key` conforms to `Hashable`. Accesses the value with the given key, falling back to the given default value if the key isn’t found.
- [index(forKey:)](index%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Returns the index for the given key.
- [subscript(\_:)](subscript%28__%29-4bhoo.md): Conforms when `Key` conforms to `Hashable`. Accesses the key-value pair at the specified position.
- [keys](keys-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the keys of the dictionary.
- [values](values-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the values of the dictionary.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
