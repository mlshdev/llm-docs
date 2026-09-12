> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/encodeconditional(_:forkey:)](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/encodeconditional(_:forkey:))

# encodeConditional(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).

## Declaration

```swift
mutating func encodeConditional<T>(_ object: T, forKey key: Self.Key) throws where T : AnyObject, T : Encodable
```

## Parameters

- `object`: The object to encode.
- `key`: The key to associate the object with.

<a id="discussion"></a>

## Discussion

For encoders which don’t support this feature, the default implementation encodes the given object unconditionally.

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.

## Default Implementations

### KeyedEncodingContainerProtocol Implementations

- [encodeConditional(\_:forKey:)](encodeconditional%28__forkey_%29-42y2.md): Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).
