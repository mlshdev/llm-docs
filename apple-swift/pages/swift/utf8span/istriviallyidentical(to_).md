> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/istriviallyidentical(to:)](https://developer.apple.com/documentation/swift/utf8span/istriviallyidentical(to:))

# isTriviallyIdentical(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Boolean value indicating whether two instances refer to the same memory region, and have the same flags (such as [isKnownASCII](isknownascii.md)).

## Declaration

```swift
func isTriviallyIdentical(to other: UTF8Span) -> Bool
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)
