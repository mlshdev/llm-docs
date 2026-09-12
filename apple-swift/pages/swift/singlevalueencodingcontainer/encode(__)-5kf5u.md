> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevalueencodingcontainer/encode(_:)-5kf5u](https://developer.apple.com/documentation/swift/singlevalueencodingcontainer/encode(_:)-5kf5u)

# encode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes a single value of the given type.

## Declaration

```swift
mutating func encode(_ value: UInt128) throws
```

## Parameters

- `value`: The value to encode.

<a id="discussion"></a>

## Discussion

> **Throws**

> `EncodingError.invalidValue` if the given value is invalid in the current context for this format.

> **Precondition**

> May not be called after a previous `self.encode(_:)` call.

## Default Implementations

### SingleValueEncodingContainer Implementations

- [encode(\_:)](encode%28__%29-5lw48.md): Conforms when `Self` conforms to `UnkeyedEncodingContainer`. Encodes a single value of the given type.
- [encode(\_:)](encode%28__%29-6x0pw.md): Encodes a single value of the given type.
- [encode(\_:)](encode%28__%29-82sdy.md): Encodes a single value of the given type.
- [encode(\_:)](encode%28__%29-wjsd.md): Conforms when `Self` conforms to `UnkeyedEncodingContainer`. Encodes a single value of the given type.
