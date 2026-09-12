> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/reservecapacity(_:)](https://developer.apple.com/documentation/swift/dictionary/reservecapacity(_:))

# reserveCapacity(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reserves enough space to store the specified number of key-value pairs.

## Declaration

```swift
mutating func reserveCapacity(_ minimumCapacity: Int)
```

## Parameters

- `minimumCapacity`: The requested number of key-value pairs to store.

<a id="discussion"></a>

## Discussion

If you are adding a known number of key-value pairs to a dictionary, use this method to avoid multiple reallocations. This method ensures that the dictionary has unique, mutable, contiguous storage, with space allocated for at least the requested number of key-value pairs.

Calling the `reserveCapacity(_:)` method on a dictionary with bridged storage triggers a copy to contiguous storage even if the existing storage has room to store `minimumCapacity` key-value pairs.

## See Also

### Adding Keys and Values

- [updateValue(\_:forKey:)](updatevalue%28__forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Updates the value stored in the dictionary for the given key, or adds a new key-value pair if the key does not exist.
