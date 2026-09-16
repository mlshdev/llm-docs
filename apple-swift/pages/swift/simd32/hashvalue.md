> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/simd32/hashvalue

# hashValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The hash value.

## Declaration

```swift
var hashValue: Int { get }
```

<a id="discussion"></a>

## Discussion

Hash values are not guaranteed to be equal across different executions of your program. Do not save hash values to use during a future execution.

> **Important**

> `hashValue` is deprecated as a `Hashable` requirement. To conform to `Hashable`, implement the `hash(into:)` requirement instead. The compiler provides an implementation for `hashValue` for you.
