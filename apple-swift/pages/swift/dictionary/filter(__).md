> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/filter(_:)](https://developer.apple.com/documentation/swift/dictionary/filter(_:))

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift 4.0+

Returns a new dictionary containing the key-value pairs of the dictionary that satisfy the given predicate.

## Declaration

```swift
consuming func filter<E>(_ isIncluded: (Dictionary<Key, Value>.Element) throws(E) -> Bool) throws(E) -> [Key : Value] where E : Error
```

## Parameters

- `isIncluded`: A closure that takes a key-value pair as its argument and returns a Boolean value indicating whether the pair should be included in the returned dictionary.

<a id="return-value"></a>

## Return Value

A dictionary of the key-value pairs that `isIncluded` allows.

## See Also

### Removing Keys and Values

- [removeValue(forKey:)](removevalue%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Removes the given key and its associated value from the dictionary.
- [remove(at:)](remove%28at_%29.md): Conforms when `Key` conforms to `Hashable`. Removes and returns the key-value pair at the specified index.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Key` conforms to `Hashable`. Removes all key-value pairs from the dictionary.
