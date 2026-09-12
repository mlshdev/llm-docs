> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/metadatacollection/metadata(_:keypath:)-62uj1](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatacollection/metadata(_:keypath:)-62uj1)

# metadata(\_:keyPath:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value at `keyPath` within the dictionary-valued metadata for the given key.

## Declaration

```swift
func metadata<T>(_ key: USDToken, keyPath: USDToken) -> T? where T : USDStage.Object.MetadataValue
```
