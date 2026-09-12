> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unfoldsequence/reversed()](https://developer.apple.com/documentation/swift/unfoldsequence/reversed())

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
