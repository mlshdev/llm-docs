> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rawspan/istriviallyidentical(to:)

# isTriviallyIdentical(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a Boolean value indicating whether two instances refer to the same memory region.

## Declaration

```swift
func isTriviallyIdentical(to other: RawSpan) -> Bool
```

## Parameters

- `other`: A span to compare with this one.

<a id="return-value"></a>

## Return Value

Whether `self` and `other` reference the same region in memory.

<a id="discussion"></a>

## Discussion

Two spans are identical if they reference the same starting address and have the same number of bytes.

> **Complexity**

> O(1)
