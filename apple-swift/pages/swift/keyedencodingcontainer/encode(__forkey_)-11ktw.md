> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encode(_:forkey:)-11ktw](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encode(_:forkey:)-11ktw)

# encode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
mutating func encode<T, C>(_ wrapper: CodableConfiguration<T?, C>, forKey key: KeyedEncodingContainer<K>.Key) throws where T : DecodableWithConfiguration, T : EncodableWithConfiguration, C : DecodingConfigurationProviding, C : EncodingConfigurationProviding, T.DecodingConfiguration == C.DecodingConfiguration, T.EncodingConfiguration == C.EncodingConfiguration
```
