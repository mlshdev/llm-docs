> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/string/init(copying:)

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
