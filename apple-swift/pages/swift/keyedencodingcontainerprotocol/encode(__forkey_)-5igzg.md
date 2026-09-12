> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-5igzg](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-5igzg)

# encode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes the given value for the given key.

## Declaration

```swift
mutating func encode(_ value: Int128, forKey key: Self.Key) throws
```

## Parameters

- `value`: The value to encode.
- `key`: The key to associate the value with.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.
