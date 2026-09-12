> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevaluedecodingcontainer/decode(_:)-5f6dc](https://developer.apple.com/documentation/swift/singlevaluedecodingcontainer/decode(_:)-5f6dc)

# decode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Decodes a single value of the given type.

## Declaration

```swift
func decode(_ type: Int128.Type) throws -> Int128
```

## Parameters

- `type`: The type to decode as.

<a id="return-value"></a>

## Return Value

A value of the requested type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value cannot be converted to the requested type.

> **Throws**

> `DecodingError.valueNotFound` if the encountered encoded value is null.
