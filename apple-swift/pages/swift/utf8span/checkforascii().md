> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/utf8span/checkforascii()

# checkForASCII()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Do a scan checking for whether the contents are all-ASCII.

## Declaration

```swift
mutating func checkForASCII() -> Bool
```

<a id="discussion"></a>

## Discussion

Updates the `isKnownASCII` bit if contents are all-ASCII.

> **Complexity**

> O(n)
