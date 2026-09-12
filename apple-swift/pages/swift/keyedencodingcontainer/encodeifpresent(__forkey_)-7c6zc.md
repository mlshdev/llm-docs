> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encodeifpresent(_:forkey:)-7c6zc](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encodeifpresent(_:forkey:)-7c6zc)

# encodeIfPresent(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes the given value for the given key if it is not `nil`.

## Declaration

```swift
mutating func encodeIfPresent(_ value: UInt128?, forKey key: KeyedEncodingContainer<K>.Key) throws
```

## Parameters

- `value`: The value to encode.
- `key`: The key to associate the value with.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.
