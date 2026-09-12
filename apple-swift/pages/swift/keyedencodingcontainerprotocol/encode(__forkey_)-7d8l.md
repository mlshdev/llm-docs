> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-7d8l](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-7d8l)

# encode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes the given value for the given key.

## Declaration

```swift
mutating func encode(_ value: Int64, forKey key: Self.Key) throws
```

## Parameters

- `value`: The value to encode.
- `key`: The key to associate the value with.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.

## Default Implementations

### KeyedEncodingContainerProtocol Implementations

- [encode(\_:forKey:)](encode%28__forkey_%29-5igzg.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](encode%28__forkey_%29-7lntx.md): Encodes the given value for the given key.
