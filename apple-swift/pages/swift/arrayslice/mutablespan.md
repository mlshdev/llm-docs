> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/arrayslice/mutablespan

# mutableSpan

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

A mutable span over the elements of this array slice.

## Declaration

```swift
var mutableSpan: MutableSpan<Element> { mutating get }
```

<a id="return-value"></a>

## Return Value

A `MutableSpan` over the elements of this array.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1) when the array’s storage is uniquely referenced, O(*n*) otherwise.
