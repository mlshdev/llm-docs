> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror/datacorrupted(_:)](https://developer.apple.com/documentation/swift/decodingerror/datacorrupted(_:))

# DecodingError.dataCorrupted(\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication that the data is corrupted or otherwise invalid.

## Declaration

```swift
case dataCorrupted(DecodingError.Context)
```

<a id="discussion"></a>

## Discussion

As an associated value, this case contains the context for debugging.
