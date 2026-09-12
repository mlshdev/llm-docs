> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encodeifpresent(_:forkey:configuration:)-7bzb4](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encodeifpresent(_:forkey:configuration:)-7bzb4)

# encodeIfPresent(\_:forKey:configuration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
mutating func encodeIfPresent<T>(_ t: T?, forKey key: KeyedEncodingContainer<K>.Key, configuration: T.EncodingConfiguration) throws where T : EncodableWithConfiguration
```
