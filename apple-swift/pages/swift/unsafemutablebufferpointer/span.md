> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/span](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/span)

# span

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

A span over the elements of this buffer.

## Declaration

```swift
var span: Span<Element> { get }
```

<a id="return-value"></a>

## Return Value

A `Span` over the elements of this buffer.

<a id="discussion"></a>

## Discussion

The lifetime of the returned span matches the lifetime of the binding which returns it. This lifetime is a convenience, as there can be no enforcement that there is no concurrent write to the underlying memory. The programmer must ensure that the memory remains allocated, initialized and immutable for the lifetime of the returned span.

> **Note**

> This property is unsafe because it cannot guarantee that the underlying memory remains valid and immutable for the lifetime of the returned span.

> **Complexity**

> O(1)
