> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/encodablewithconfiguration/encode(to:configuration:)](https://developer.apple.com/documentation/foundation/encodablewithconfiguration/encode(to:configuration:))

# encode(to:configuration:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes the value into the specified encoder with help from the provided configuration.

## Declaration

```swift
func encode(to encoder: any Encoder, configuration: Self.EncodingConfiguration) throws
```

## Parameters

- `encoder`: The encoder to write data to.
- `configuration`: An encoding configuration instance that provides additional information necessary for encoding.
