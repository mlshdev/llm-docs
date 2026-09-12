> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encode(_:forkey:)-3a74m](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encode(_:forkey:)-3a74m)

# encode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes the given value for the given key.

## Declaration

```swift
mutating func encode<T>(_ value: T, forKey key: KeyedEncodingContainer<K>.Key) throws where T : Encodable
```

## Parameters

- `value`: The value to encode.
- `key`: The key to associate the value with.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.
