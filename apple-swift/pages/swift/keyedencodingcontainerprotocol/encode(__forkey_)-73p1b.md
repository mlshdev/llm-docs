> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-73p1b](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/encode(_:forkey:)-73p1b)

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

## Default Implementations

### KeyedEncodingContainerProtocol Implementations

- [encode(\_:forKey:)](encode%28__forkey_%29-5igzg.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](encode%28__forkey_%29-7lntx.md): Encodes the given value for the given key.
