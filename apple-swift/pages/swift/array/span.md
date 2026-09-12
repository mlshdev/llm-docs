> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/span](https://developer.apple.com/documentation/swift/array/span)

# span

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A span over the elements of this array.

## Declaration

```swift
var span: Span<Element> { get }
```

<a id="return-value"></a>

## Return Value

A `Span` over the elements of this array.

<a id="discussion"></a>

## Discussion

> **Note**

> On Apple platforms, this property copies bridged `NSArray` instances into contiguous storage on first access and caches the result. Subsequent calls can reuse the cached copy.

> **Complexity**

> O(1) for native arrays, amortized O(1) for bridged arrays.
