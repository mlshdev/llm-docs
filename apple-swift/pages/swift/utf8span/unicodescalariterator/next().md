> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/unicodescalariterator/next()](https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Decode and return the scalar starting at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the end of the returned scalar, which is also the start of the next scalar.

## Declaration

```swift
mutating func next() -> Unicode.Scalar?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if at the end of the `UTF8Span`.

> **Complexity**

> O(1)
