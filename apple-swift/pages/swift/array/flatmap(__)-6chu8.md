> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/flatmap(_:)-6chu8](https://developer.apple.com/documentation/swift/array/flatmap(_:)-6chu8)

# flatMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 4.1)

## Declaration

```swift
func flatMap<ElementOfResult>(_ transform: (Self.Element) throws -> ElementOfResult?) rethrows -> [ElementOfResult]
```

## See Also

### Transforming an Array

- [flatMap(\_:)](flatmap%28__%29-i3mr.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [compactMap(\_:)](compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [lazy](lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.
