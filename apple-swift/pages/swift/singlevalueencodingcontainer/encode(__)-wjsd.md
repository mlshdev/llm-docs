> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevalueencodingcontainer/encode(_:)-wjsd](https://developer.apple.com/documentation/swift/singlevalueencodingcontainer/encode(_:)-wjsd)

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
