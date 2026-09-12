> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encode(_:forkey:configuration:)-3i2wq](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encode(_:forkey:configuration:)-3i2wq)

# encode(\_:forKey:configuration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
mutating func encode<T, C>(_ t: T, forKey key: KeyedEncodingContainer<K>.Key, configuration: C.Type) throws where T : EncodableWithConfiguration, C : EncodingConfigurationProviding, T.EncodingConfiguration == C.EncodingConfiguration
```
