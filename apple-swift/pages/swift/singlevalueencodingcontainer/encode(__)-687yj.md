> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevalueencodingcontainer/encode(_:)-687yj](https://developer.apple.com/documentation/swift/singlevalueencodingcontainer/encode(_:)-687yj)

# encode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a single value of the given type.

## Declaration

```swift
mutating func encode<T>(_ value: T) throws where T : Encodable
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
