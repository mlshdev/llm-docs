> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/stringprotocol/getcstring(_:maxlength:encoding:)

# getCString(\_:maxLength:encoding:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts the `String`’s content to a given encoding and stores them in a buffer.

## Declaration

```swift
func getCString(_ buffer: inout [CChar], maxLength: Int, encoding: String.Encoding) -> Bool
```

<a id="discussion"></a>

## Discussion

> **Note**

> Will store a maximum of `min(buffer.count, maxLength)` bytes.
