> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistdecoder/decode(_:from:format:configuration:)-1frbk](https://developer.apple.com/documentation/foundation/propertylistdecoder/decode(_:from:format:configuration:)-1frbk)

# decode(\_:from:format:configuration:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func decode<T>(_ type: T.Type, from data: Data, format: inout PropertyListDecoder.PropertyListFormat, configuration: T.DecodingConfiguration) throws -> T where T : DecodableWithConfiguration
```
