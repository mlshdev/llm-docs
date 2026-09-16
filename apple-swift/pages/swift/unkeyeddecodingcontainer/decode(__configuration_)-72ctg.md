> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decode(_:configuration:)-72ctg

# decode(\_:configuration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
mutating func decode<T, C>(_: T.Type, configuration: C.Type) throws -> T where T : DecodableWithConfiguration, C : DecodingConfigurationProviding, T.DecodingConfiguration == C.DecodingConfiguration
```
