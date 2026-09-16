> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/staticstring/unicodescalar

# unicodeScalar

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A single Unicode scalar value.

## Declaration

```swift
var unicodeScalar: Unicode.Scalar { get }
```

<a id="discussion"></a>

## Discussion

> **Important**

> Accessing this property when `hasPointerRepresentation` is `true` triggers a runtime error.
