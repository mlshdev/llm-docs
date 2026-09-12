> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf8span](https://developer.apple.com/documentation/swift/string/utf8span)

# utf8Span

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A UTF-8 span over the code units that make up this string.

## Declaration

```swift
var utf8Span: UTF8Span { get }
```

<a id="return-value"></a>

## Return Value

A `UTF8Span` over the code units of this `String`.

<a id="discussion"></a>

## Discussion

> **Note**

> On Apple platforms, this property transcodes the code units of bridged UTF-16 `String` instances on first access and caches the result. Subsequent calls can reuse the cached buffer.

> **Complexity**

> O(1) for native UTF-8 strings, amortized O(1) for bridged UTF-16 strings.
