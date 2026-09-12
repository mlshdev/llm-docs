> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/values-swift.struct/index](https://developer.apple.com/documentation/swift/dictionary/values-swift.struct/index)

# Dictionary.Values.Index

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents a position in the collection.

## Declaration

```swift
typealias Index = Dictionary<Key, Value>.Index
```

<a id="discussion"></a>

## Discussion

Valid indices consist of the position of every element and a “past the end” position that’s not valid for use as a subscript argument.
