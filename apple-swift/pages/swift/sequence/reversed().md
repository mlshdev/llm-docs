> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/reversed()](https://developer.apple.com/documentation/swift/sequence/reversed())

# reversed()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the elements of this sequence in reverse order.

## Declaration

```swift
func reversed() -> [Self.Element]
```

<a id="return-value"></a>

## Return Value

An array containing the elements of this sequence in reverse order.

<a id="discussion"></a>

## Discussion

The sequence must be finite.

> **Complexity**

> O(*n*), where *n* is the length of the sequence.

## See Also

### Sorting Elements

- [sorted()](sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
