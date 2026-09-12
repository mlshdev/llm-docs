> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decodablewithconfiguration/init(from:configuration:)](https://developer.apple.com/documentation/foundation/decodablewithconfiguration/init(from:configuration:))

# init(from:configuration:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new instance by retrieving the instance’s data from the specified decoder with help from the provided configuration.

## Declaration

```swift
init(from decoder: any Decoder, configuration: Self.DecodingConfiguration) throws
```

## Parameters

- `decoder`: The decoder to read data from.
- `configuration`: A decoding configuration instance that provides additional information necessary for decoding.
