> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/object/metadatacollection/setmetadata(_:value:)-r1j8

# setMetadata(\_:value:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the metadata value for the given key.

## Declaration

```swift
func setMetadata<T>(_ key: USDToken, value: T) throws where T : USDStage.Object.MetadataValue
```
