> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack/downloadsize](https://developer.apple.com/documentation/backgroundassets/assetpack/downloadsize)

# downloadSize

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The size of the download file containing the asset pack in bytes.

## Declaration

```swift
let downloadSize: Int
```

<a id="discussion"></a>

## Discussion

This is different than the installation size, which could be larger.

## See Also

### Downloading assets

- [download(for:)](download%28for_%29.md): Creates a download object for the asset pack that you schedule using a download manager.
