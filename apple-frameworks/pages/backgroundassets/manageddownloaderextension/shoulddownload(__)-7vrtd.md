> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/manageddownloaderextension/shoulddownload(_:)-7vrtd](https://developer.apple.com/documentation/backgroundassets/manageddownloaderextension/shoulddownload(_:)-7vrtd)

# shouldDownload(\_:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines whether a particular asset pack should be downloaded.

## Declaration

```swift
func shouldDownload(_ assetPack: AssetPack) -> Bool
```

## Parameters

- `assetPack`: An asset pack that’s being considered as a candidate to be downloaded.

<a id="return-value"></a>

## Return Value

Whether the asset pack should be downloaded.

<a id="discussion"></a>

## Discussion

This default implementation always returns `true`. You can override it to specify your own filtering logic.
