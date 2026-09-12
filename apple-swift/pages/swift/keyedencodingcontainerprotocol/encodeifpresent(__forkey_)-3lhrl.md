> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/encodeifpresent(_:forkey:)-3lhrl](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/encodeifpresent(_:forkey:)-3lhrl)

# encodeIfPresent(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes the given value for the given key if it is not `nil`.

## Declaration

```swift
mutating func encodeIfPresent(_ value: UInt64?, forKey key: Self.Key) throws
```

## Parameters

- `value`: The value to encode.
- `key`: The key to associate the value with.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.
