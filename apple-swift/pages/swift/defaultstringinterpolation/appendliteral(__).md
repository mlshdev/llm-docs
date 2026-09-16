> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/defaultstringinterpolation/appendliteral(_:)

# appendLiteral(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends a literal segment of a string interpolation.

## Declaration

```swift
mutating func appendLiteral(_ literal: String)
```

<a id="discussion"></a>

## Discussion

You don’t need to call this method directly. It’s used by the compiler when interpreting string interpolations.
