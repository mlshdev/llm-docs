> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer/decode(_:forkey:)-8u7rt](https://developer.apple.com/documentation/swift/keyeddecodingcontainer/decode(_:forkey:)-8u7rt)

# decode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
func decode<T, C>(_: CodableConfiguration<T?, C>.Type, forKey key: KeyedDecodingContainer<K>.Key) throws -> CodableConfiguration<T?, C> where T : DecodableWithConfiguration, T : EncodableWithConfiguration, C : DecodingConfigurationProviding, C : EncodingConfigurationProviding, T.DecodingConfiguration == C.DecodingConfiguration, T.EncodingConfiguration == C.EncodingConfiguration
```
