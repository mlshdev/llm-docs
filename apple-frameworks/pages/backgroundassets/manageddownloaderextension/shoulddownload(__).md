> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/manageddownloaderextension/shoulddownload(_:)](https://developer.apple.com/documentation/backgroundassets/manageddownloaderextension/shoulddownload(_:))

# shouldDownload(\_:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines whether to download an asset pack.

## Declaration

```swift
func shouldDownload(_ assetPack: AssetPack) -> Bool
```

## Parameters

- `assetPack`: An asset pack that’s being considered as a candidate to be downloaded.

<a id="return-value"></a>

## Return Value

Whether the asset pack should be downloaded.

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)

<a id="discussion"></a>

## Discussion

By default, the system automatically downloads all applicable asset packs with either “essential” or “prefetch” download policies for the current installation event type. You can optionally implement this method to filter out unwanted asset packs at runtime.

## Default Implementations

### ManagedDownloaderExtension Implementations

- [shouldDownload(\_:)](shoulddownload%28__%29-7vrtd.md): Determines whether a particular asset pack should be downloaded.
