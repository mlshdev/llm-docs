> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/keyedencodingcontainer/encodeconditional(_:forkey:)

# encodeConditional(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).

## Declaration

```swift
mutating func encodeConditional<T>(_ object: T, forKey key: KeyedEncodingContainer<K>.Key) throws where T : AnyObject, T : Encodable
```

## Parameters

- `object`: The object to encode.
- `key`: The key to associate the object with.

<a id="discussion"></a>

## Discussion

For encoders which don’t support this feature, the default implementation encodes the given object unconditionally.

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.
