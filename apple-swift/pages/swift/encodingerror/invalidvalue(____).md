> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/encodingerror/invalidvalue(_:_:)](https://developer.apple.com/documentation/swift/encodingerror/invalidvalue(_:_:))

# EncodingError.invalidValue(\_:\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication that an encoder or its containers could not encode the given value.

## Declaration

```swift
case invalidValue(Any, EncodingError.Context)
```

<a id="discussion"></a>

## Discussion

As associated values, this case contains the attempted value and context for debugging.
