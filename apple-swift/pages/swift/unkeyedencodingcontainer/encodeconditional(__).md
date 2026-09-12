> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyedencodingcontainer/encodeconditional(_:)](https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/encodeconditional(_:))

# encodeConditional(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).

## Declaration

```swift
mutating func encodeConditional<T>(_ object: T) throws where T : AnyObject, T : Encodable
```

## Parameters

- `object`: The object to encode.

<a id="discussion"></a>

## Discussion

For encoders which don’t support this feature, the default implementation encodes the given object unconditionally.

For formats which don’t support this feature, the default implementation encodes the given object unconditionally.

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.

## Default Implementations

### UnkeyedEncodingContainer Implementations

- [encodeConditional(\_:)](encodeconditional%28__%29-4trvc.md): Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).
