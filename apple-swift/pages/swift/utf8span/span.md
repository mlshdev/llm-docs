> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/span](https://developer.apple.com/documentation/swift/utf8span/span)

# span

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A span used to access the code units.

## Declaration

```swift
var span: Span<UInt8> { get }
```

<a id="return-value"></a>

## Return Value

A `Span` over the UTF-8 code units of this `UTF8Span`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)
