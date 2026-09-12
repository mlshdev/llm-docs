> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/spec/setassetinfo(_:to:)](https://developer.apple.com/documentation/usdkit/usdprim/relationship/spec/setassetinfo(_:to:))

# setAssetInfo(\_:to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets `key` in the asset info dictionary to `value`. Read the full dictionary via `field("assetInfo")` from FieldCollection.

## Declaration

```swift
func setAssetInfo(_ key: String, to value: USDValue)
```

## Parameters

- `key`: The dictionary key.
- `value`: The new value.
