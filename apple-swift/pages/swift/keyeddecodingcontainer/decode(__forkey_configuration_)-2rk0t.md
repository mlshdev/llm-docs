> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer/decode(_:forkey:configuration:)-2rk0t](https://developer.apple.com/documentation/swift/keyeddecodingcontainer/decode(_:forkey:configuration:)-2rk0t)

# decode(\_:forKey:configuration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
func decode<T>(_: T.Type, forKey key: KeyedDecodingContainer<K>.Key, configuration: T.DecodingConfiguration) throws -> T where T : DecodableWithConfiguration
```
