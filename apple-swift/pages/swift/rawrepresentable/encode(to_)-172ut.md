> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/encode(to:)-172ut](https://developer.apple.com/documentation/swift/rawrepresentable/encode(to:)-172ut)

# encode(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes this value into the given encoder, when the type’s `RawValue` is `Int128`.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

This function throws an error if any values are invalid for the given encoder’s format.
