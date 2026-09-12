> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/isempty](https://developer.apple.com/documentation/swift/dictionary/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the dictionary is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="discussion"></a>

## Discussion

Dictionaries are empty when created with an initializer or an empty dictionary literal.

```swift
var frequencies: [String: Int] = [:]
print(frequencies.isEmpty)
// Prints "true"
```

## See Also

### Inspecting a Dictionary

- [count](count.md): Conforms when `Key` conforms to `Hashable`. The number of key-value pairs in the dictionary.
- [capacity](capacity.md): Conforms when `Key` conforms to `Hashable`. The total number of key-value pairs that the dictionary can contain without allocating new storage.
