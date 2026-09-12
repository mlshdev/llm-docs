> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror/typemismatch(_:_:)](https://developer.apple.com/documentation/swift/decodingerror/typemismatch(_:_:))

# DecodingError.typeMismatch(\_:\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication that a value of the given type could not be decoded because it did not match the type of what was found in the encoded payload.

## Declaration

```swift
case typeMismatch(any Any.Type, DecodingError.Context)
```

<a id="discussion"></a>

## Discussion

As associated values, this case contains the attempted type and context for debugging.
