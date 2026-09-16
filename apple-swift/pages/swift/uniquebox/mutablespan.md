> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uniquebox/mutablespan

# mutableSpan

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A mutable span over the single element stored in this box.

## Declaration

```swift
var mutableSpan: MutableSpan<Value> { mutating get }
```

<a id="return-value"></a>

## Return Value

A `MutableSpan` over the element stored in this box.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)
