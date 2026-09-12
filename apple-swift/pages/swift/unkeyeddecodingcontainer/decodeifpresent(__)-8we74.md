> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decodeifpresent(_:)-8we74](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decodeifpresent(_:)-8we74)

# decodeIfPresent(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Decodes a value of the given type, if present.

## Declaration

```swift
mutating func decodeIfPresent(_ type: UInt128.Type) throws -> UInt128?
```

## Parameters

- `type`: The type of value to decode.

<a id="return-value"></a>

## Return Value

A decoded value of the requested type, or `nil` if the value is a null value, or if there are no more elements to decode.

<a id="discussion"></a>

## Discussion

This method returns `nil` if the container has no elements left to decode, or if the value is null. The difference between these states can be distinguished by checking `isAtEnd`.

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.
