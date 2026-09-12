> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/iscanonicallylessthan(_:)](https://developer.apple.com/documentation/swift/utf8span/iscanonicallylessthan(_:))

# isCanonicallyLessThan(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Whether `self` orders less than `other` under Unicode Canonical Equivalence using normalized code-unit order (in NFC).

## Declaration

```swift
func isCanonicallyLessThan(_ other: UTF8Span) -> Bool
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(n)
