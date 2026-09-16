> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/singlevalueencodingcontainer/encodenil()

# encodeNil()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a null value.

## Declaration

```swift
mutating func encodeNil() throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if a null value is invalid in the current context for this format.

> **Precondition**

> May not be called after a previous `self.encode(_:)` call.
