> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskpriority/encode(to:)](https://developer.apple.com/documentation/swift/taskpriority/encode(to:))

# encode(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes this value into the given encoder, when the type’s `RawValue` is `UInt8`.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

This function throws an error if any values are invalid for the given encoder’s format.
