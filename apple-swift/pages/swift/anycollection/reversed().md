> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/anycollection/reversed()

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
