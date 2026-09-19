> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/object/metadatacollection/metadata(_:)-574ho

# metadata(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the metadata value for the given key.

## Declaration

```swift
func metadata<T>(_ key: USDToken) -> T? where T : USDStage.Object.MetadataValue
```
