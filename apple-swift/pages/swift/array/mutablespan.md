> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/mutablespan

# mutableSpan

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A mutable span over the elements of this array.

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
