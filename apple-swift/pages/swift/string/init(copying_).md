> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(copying:)](https://developer.apple.com/documentation/swift/string/init(copying:))

# init(copying:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new string, copying the specified code units.

## Declaration

```swift
init(copying codeUnits: UTF8Span)
```

<a id="discussion"></a>

## Discussion

This initializer skips UTF-8 validation because `codeUnits` must contain valid UTF-8.

> **Complexity**

> O(n)
