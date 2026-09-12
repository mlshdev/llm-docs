> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer/decodeifpresent(_:forkey:)-9ujt](https://developer.apple.com/documentation/swift/keyeddecodingcontainer/decodeifpresent(_:forkey:)-9ujt)

# decodeIfPresent(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a value of the given type for the given key, if present.

## Declaration

```swift
func decodeIfPresent(_ type: Bool.Type, forKey key: Self.Key) throws -> Bool?
```

## Parameters

- `type`: The type of value to decode.
- `key`: The key that the decoded value is associated with.

<a id="return-value"></a>

## Return Value

A decoded value of the requested type, or `nil` if the `Decoder` does not have an entry associated with the given key, or if the value is a null value.

<a id="discussion"></a>

## Discussion

This method returns `nil` if the container does not have a value associated with `key`, or if the value is null. The difference between these states can be distinguished with a `contains(_:)` call.

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.
